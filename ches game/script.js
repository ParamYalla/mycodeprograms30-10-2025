// --- Chess Unicode Pieces
const PIECE_UNICODES = {
  wK: "♔",
  wQ: "♕",
  wR: "♖",
  wB: "♗",
  wN: "♘",
  wP: "♙",
  bK: "♚",
  bQ: "♛",
  bR: "♜",
  bB: "♝",
  bN: "♞",
  bP: "♟",
};

// --- Core Chess Classes ---
class Piece {
  constructor(type, color) {
    this.type = type; // 'K','Q','R','B','N','P'
    this.color = color; // 'w' or 'b'
    this.hasMoved = false;
    this.justDoubleMoved = false;
  }
  clone() {
    const p = new Piece(this.type, this.color);
    p.hasMoved = this.hasMoved;
    p.justDoubleMoved = this.justDoubleMoved;
    return p;
  }
}

class Board {
  constructor() {
    this.grid = this.createEmpty();
    this.enPassantTarget = null;
    this.whiteCanCastleKing = true;
    this.whiteCanCastleQueen = true;
    this.blackCanCastleKing = true;
    this.blackCanCastleQueen = true;
    this.turn = "w";
    this.halfMoveClock = 0;
    this.fullMoveNum = 1;
    this.initStandard();
  }
  createEmpty() {
    return Array.from({ length: 8 }, () => Array(8).fill(null));
  }
  initStandard() {
    this.grid = this.createEmpty();

    for (let i = 0; i < 8; i++) {
      this.grid[1][i] = new Piece("P", "b");
      this.grid[6][i] = new Piece("P", "w");
    }

    const backRank = ["R", "N", "B", "Q", "K", "B", "N", "R"];
    for (let i = 0; i < 8; i++) {
      this.grid[0][i] = new Piece(backRank[i], "b");
      this.grid[7][i] = new Piece(backRank[i], "w");
    }
  }
  clone() {
    const b = new Board();
    b.grid = this.grid.map((row) => row.map((p) => (p ? p.clone() : null)));
    b.enPassantTarget = this.enPassantTarget
      ? { ...this.enPassantTarget }
      : null;
    b.whiteCanCastleKing = this.whiteCanCastleKing;
    b.whiteCanCastleQueen = this.whiteCanCastleQueen;
    b.blackCanCastleKing = this.blackCanCastleKing;
    b.blackCanCastleQueen = this.blackCanCastleQueen;
    b.turn = this.turn;
    b.halfMoveClock = this.halfMoveClock;
    b.fullMoveNum = this.fullMoveNum;
    return b;
  }
  isOnBoard(x, y) {
    return x >= 0 && x < 8 && y >= 0 && y < 8;
  }
  getPiece(x, y) {
    return this.isOnBoard(x, y) ? this.grid[x][y] : null;
  }
  setPiece(x, y, piece) {
    if (this.isOnBoard(x, y)) this.grid[x][y] = piece;
  }
  findKing(color) {
    for (let x = 0; x < 8; x++)
      for (let y = 0; y < 8; y++) {
        const p = this.getPiece(x, y);
        if (p && p.color === color && p.type === "K") return { x, y };
      }
    return null;
  }
  isKingInCheck(color) {
    const king = this.findKing(color);
    if (!king) return false;
    return this.isSquareAttacked(king.x, king.y, color);
  }
  isSquareAttacked(x, y, color) {
    const opp = color === "w" ? "b" : "w";
    for (let i = 0; i < 8; i++)
      for (let j = 0; j < 8; j++) {
        const p = this.getPiece(i, j);
        if (p && p.color === opp) {
          const moves = Board.getRawMoves(i, j, this, true);
          for (const m of moves) {
            if (m.x === x && m.y === y) return true;
          }
        }
      }
    return false;
  }
  static getRawMoves(x, y, board, forAttack = false) {
    const moves = [];
    const piece = board.getPiece(x, y);
    if (!piece) return moves;
    const { color, type } = piece;
    const dir = color === "w" ? -1 : 1;
    if (type === "P") {
      if (!forAttack) {
        if (board.isOnBoard(x + dir, y) && !board.getPiece(x + dir, y))
          moves.push({ x: x + dir, y });
        if (
          ((color === "w" && x === 6) || (color === "b" && x === 1)) &&
          !board.getPiece(x + dir, y) &&
          board.isOnBoard(x + 2 * dir, y) &&
          !board.getPiece(x + 2 * dir, y)
        )
          moves.push({ x: x + 2 * dir, y });
      }
      for (let dy of [-1, 1]) {
        let nx = x + dir,
          ny = y + dy;
        if (board.isOnBoard(nx, ny)) {
          const target = board.getPiece(nx, ny);
          if (target && target.color !== color)
            moves.push({ x: nx, y: ny, capture: true });
        }
      }
      for (let dy of [-1, 1]) {
        let nx = x + dir,
          ny = y + dy;
        if (
          board.enPassantTarget &&
          board.enPassantTarget.x === nx &&
          board.enPassantTarget.y === ny
        )
          moves.push({ x: nx, y: ny, enPassant: true });
      }
    } else if (type === "N") {
      for (const d of [
        [2, 1],
        [2, -1],
        [1, 2],
        [1, -2],
        [-1, 2],
        [-1, -2],
        [-2, 1],
        [-2, -1],
      ]) {
        let nx = x + d[0],
          ny = y + d[1];
        if (board.isOnBoard(nx, ny)) {
          const target = board.getPiece(nx, ny);
          if (!target || target.color !== color)
            moves.push({ x: nx, y: ny, capture: !!target });
        }
      }
    } else if (type === "B" || type === "R" || type === "Q") {
      const dirs = [];
      if (type === "Q" || type === "B")
        dirs.push([-1, -1], [-1, 1], [1, 1], [1, -1]);
      if (type === "Q" || type === "R")
        dirs.push([-1, 0], [1, 0], [0, -1], [0, 1]);
      for (const [dx, dy] of dirs) {
        let dist = 1;
        while (true) {
          let nx = x + dx * dist,
            ny = y + dy * dist;
          if (!board.isOnBoard(nx, ny)) break;
          const target = board.getPiece(nx, ny);
          if (!target) moves.push({ x: nx, y: ny });
          else {
            if (target.color !== color)
              moves.push({ x: nx, y: ny, capture: true });
            break;
          }
          dist++;
        }
      }
    } else if (type === "K") {
      for (const dx of [-1, 0, 1])
        for (const dy of [-1, 0, 1]) {
          if (dx === 0 && dy === 0) continue;
          let nx = x + dx,
            ny = y + dy;
          if (!board.isOnBoard(nx, ny)) continue;
          const target = board.getPiece(nx, ny);
          if (!target || target.color !== color)
            moves.push({ x: nx, y: ny, capture: !!target });
        }
      if (!piece.hasMoved && !forAttack) {
        if (
          ((color === "w" && board.whiteCanCastleKing) ||
            (color === "b" && board.blackCanCastleKing)) &&
          !board.getPiece(x, y + 1) &&
          !board.getPiece(x, y + 2)
        ) {
          if (
            !board.isSquareAttacked(x, y, color) &&
            !board.isSquareAttacked(x, y + 1, color) &&
            !board.isSquareAttacked(x, y + 2, color)
          ) {
            moves.push({ x: x, y: y + 2, castling: "king" });
          }
        }
        if (
          ((color === "w" && board.whiteCanCastleQueen) ||
            (color === "b" && board.blackCanCastleQueen)) &&
          !board.getPiece(x, y - 1) &&
          !board.getPiece(x, y - 2) &&
          !board.getPiece(x, y - 3)
        ) {
          if (
            !board.isSquareAttacked(x, y, color) &&
            !board.isSquareAttacked(x, y - 1, color) &&
            !board.isSquareAttacked(x, y - 2, color)
          ) {
            moves.push({ x: x, y: y - 2, castling: "queen" });
          }
        }
      }
    }
    return moves;
  }
  getLegalMovesFrom(x, y) {
    const piece = this.getPiece(x, y);
    if (!piece || piece.color !== this.turn) return [];
    let candidates = Board.getRawMoves(x, y, this, false);
    let legal = [];

    for (const move of candidates) {
      const newBoard = this.clone();
      newBoard.performMove(x, y, move.x, move.y, move);
      if (!newBoard.isKingInCheck(piece.color)) {
        legal.push(move);
      }
    }
    return legal;
  }
  getAllLegalMoves(color) {
    let moves = [];
    for (let x = 0; x < 8; x++)
      for (let y = 0; y < 8; y++) {
        const p = this.getPiece(x, y);
        if (p && p.color === color)
          moves = moves.concat(
            this.getLegalMovesFrom(x, y).map((move) => ({
              from: { x, y },
              to: { x: move.x, y: move.y },
              meta: move,
            }))
          );
      }
    return moves;
  }
  performMove(x0, y0, x1, y1, meta) {
    const piece = this.getPiece(x0, y0);
    if (!piece) return false;
    if (piece.type === "K" && meta && meta.castling) {
      if (meta.castling === "king") {
        this.setPiece(x1, y1, piece);
        this.setPiece(x0, y0, null);
        this.setPiece(x0, y0 + 3, null);
        this.setPiece(x0, y0 + 1, new Piece("R", piece.color));
        if (piece.color === "w") {
          this.whiteCanCastleKing = false;
          this.whiteCanCastleQueen = false;
        } else {
          this.blackCanCastleKing = false;
          this.blackCanCastleQueen = false;
        }
        piece.hasMoved = true;
        return true;
      }
      if (meta.castling === "queen") {
        this.setPiece(x1, y1, piece);
        this.setPiece(x0, y0, null);
        this.setPiece(x0, y0 - 4, null);
        this.setPiece(x0, y0 - 1, new Piece("R", piece.color));
        if (piece.color === "w") {
          this.whiteCanCastleKing = false;
          this.whiteCanCastleQueen = false;
        } else {
          this.blackCanCastleKing = false;
          this.blackCanCastleQueen = false;
        }
        piece.hasMoved = true;
        return true;
      }
    }
    for (let r = 0; r < 8; r++)
      for (let c = 0; c < 8; c++) {
        const p = this.getPiece(r, c);
        if (p && p.type === "P") p.justDoubleMoved = false;
      }
    if (piece.type === "P" && (x1 === 0 || x1 === 7)) {
      this.setPiece(x1, y1, new Piece("Q", piece.color));
      this.setPiece(x0, y0, null);
      this.enPassantTarget = null;
      piece.hasMoved = true;
      return true;
    }
    if (piece.type === "P" && meta && meta.enPassant) {
      this.setPiece(x1, y1, piece);
      this.setPiece(x0, y0, null);
      let capturedX = x0,
        capturedY = y1;
      this.setPiece(capturedX, capturedY, null);
      this.enPassantTarget = null;
      piece.hasMoved = true;
      this.halfMoveClock = 0;
      return true;
    }
    if (piece.type === "K") {
      if (piece.color === "w") {
        this.whiteCanCastleKing = false;
        this.whiteCanCastleQueen = false;
      } else {
        this.blackCanCastleKing = false;
        this.blackCanCastleQueen = false;
      }
    }
    if (piece.type === "R") {
      if (piece.color === "w" && x0 === 7 && y0 === 0)
        this.whiteCanCastleQueen = false;
      if (piece.color === "w" && x0 === 7 && y0 === 7)
        this.whiteCanCastleKing = false;
      if (piece.color === "b" && x0 === 0 && y0 === 0)
        this.blackCanCastleQueen = false;
      if (piece.color === "b" && x0 === 0 && y0 === 7)
        this.blackCanCastleKing = false;
    }
    if (piece.type === "P" && Math.abs(x1 - x0) === 2) {
      this.enPassantTarget = { x: (x0 + x1) / 2, y: y0 };
      piece.justDoubleMoved = true;
    } else {
      this.enPassantTarget = null;
    }
    if (this.getPiece(x1, y1) || piece.type === "P") {
      this.halfMoveClock = 0;
    } else {
      this.halfMoveClock++;
    }
    this.setPiece(x1, y1, piece);
    this.setPiece(x0, y0, null);
    piece.hasMoved = true;
    return true;
  }
}

// --- Chess Game Controller / DOM & Bot ---

class ChessGame {
  constructor() {
    this.board = new Board();
    this.selected = null;
    this.validMoves = [];
    this.statusElem = document.getElementById("game-status");
    this.chessboardElem = document.getElementById("chessboard");
    this.resetBtn = document.getElementById("reset-btn");
    this.undoBtn = document.getElementById("undo-btn");
    this.redoBtn = document.getElementById("redo-btn");
    this.modeRadios = document.querySelectorAll('input[name="mode"]');
    this.botSideSelect = document.getElementById("bot-side");

    this.mode = "human"; // 'human' or 'bot'
    this.botSide = "b"; // 'w' or 'b'
    this.moveStack = []; // Board snapshots to allow undo
    this.redoStack = [];

    this.resetBtn.onclick = () => this.reset();
    this.undoBtn.onclick = () => this.undo();
    this.redoBtn.onclick = () => this.redo();
    this.modeRadios.forEach((r) => (r.onchange = () => this.updateMode()));
    this.botSideSelect.onchange = () => this.setBotSide();

    this.chessboardElem.innerHTML = "";
    this.addSquares();
    this.updateMode();
    this.render();
  }
  addSquares() {
    for (let x = 0; x < 8; x++)
      for (let y = 0; y < 8; y++) {
        const sq = document.createElement("div");
        sq.className = `square ${(x + y) % 2 === 0 ? "light" : "dark"}`;
        sq.dataset.x = x;
        sq.dataset.y = y;
        sq.addEventListener("click", () => this.onSquareClick(x, y));
        this.chessboardElem.appendChild(sq);
      }
  }
  onSquareClick(x, y) {
    if (this.state && this.state.over) return;
    if (this.mode === "bot" && this.board.turn === this.botSide) return;
    const piece = this.board.getPiece(x, y);
    if (this.selected && this.selected.x === x && this.selected.y === y) {
      this.selected = null;
      this.validMoves = [];
      this.render();
      return;
    }
    if (!this.selected) {
      if (piece && piece.color === this.board.turn) {
        this.selected = { x, y };
        this.validMoves = this.board.getLegalMovesFrom(x, y);
        this.render();
      }
    } else {
      const valid = this.validMoves.find((m) => m.x === x && m.y === y);
      if (valid) {
        this.pushHistory();
        this.board.performMove(this.selected.x, this.selected.y, x, y, valid);
        this.afterMove();
      } else if (piece && piece.color === this.board.turn) {
        this.selected = { x, y };
        this.validMoves = this.board.getLegalMovesFrom(x, y);
        this.render();
      }
    }
  }
  afterMove() {
    this.selected = null;
    this.validMoves = [];
    this.toggleTurn();
    this.render();
    this.scheduleBotIfNeeded();
  }
  toggleTurn() {
    this.board.turn = this.board.turn === "w" ? "b" : "w";
    if (this.board.turn === "w") this.board.fullMoveNum++;
    this.checkGameState();
  }
  checkGameState() {
    const allLegal = this.board.getAllLegalMoves(this.board.turn);
    const inCheck = this.board.isKingInCheck(this.board.turn);
    let over = false,
      statusText = "";
    if (allLegal.length === 0) {
      if (inCheck) {
        statusText = `Checkmate! ${
          this.board.turn === "w" ? "Black" : "White"
        } wins.`;
        over = true;
      } else {
        statusText = "Stalemate!";
        over = true;
      }
    } else if (inCheck) {
      statusText = `${
        this.board.turn === "w" ? "White" : "Black"
      } is in Check. ${this.board.turn === "w" ? "White" : "Black"}'s turn.`;
    } else {
      statusText = `${this.board.turn === "w" ? "White" : "Black"}'s turn.`;
    }
    this.state = { over, statusText, inCheck };
    return this.state;
  }
  render() {
    for (let x = 0; x < 8; x++)
      for (let y = 0; y < 8; y++) {
        const idx = x * 8 + y;
        const square = this.chessboardElem.children[idx];
        square.classList.remove(
          "selected",
          "valid-move",
          "capture",
          "in-check"
        );
        if (this.selected && this.selected.x === x && this.selected.y === y)
          square.classList.add("selected");
        if (this.selected) {
          for (const move of this.validMoves) {
            if (move.x === x && move.y === y) {
              if (this.board.getPiece(x, y)) square.classList.add("capture");
              else square.classList.add("valid-move");
            }
          }
        }
        square.innerHTML = "";
        const piece = this.board.getPiece(x, y);
        if (piece) {
          const span = document.createElement("span");
          span.className = "piece";
          span.textContent = PIECE_UNICODES[piece.color + piece.type];
          square.appendChild(span);
        }
      }
    const selfCheck = this.board.isKingInCheck(this.board.turn);
    const oppCheck = this.board.isKingInCheck(
      this.board.turn === "w" ? "b" : "w"
    );
    if (selfCheck || oppCheck) {
      for (let x = 0; x < 8; x++)
        for (let y = 0; y < 8; y++) {
          const p = this.board.getPiece(x, y);
          if (
            p &&
            p.type === "K" &&
            ((selfCheck && p.color === this.board.turn) ||
              (oppCheck &&
                p.color !== this.board.turn &&
                this.state &&
                this.state.over))
          ) {
            const idx = x * 8 + y;
            this.chessboardElem.children[idx].classList.add("in-check");
          }
        }
    }
    this.checkGameState();
    this.statusElem.textContent = this.state.statusText;
    this.undoBtn.disabled = this.moveStack.length === 0;
    this.redoBtn.disabled = this.redoStack.length === 0;
    this.botSideSelect.disabled = this.mode !== "bot";
  }
  reset() {
    this.board = new Board();
    this.selected = null;
    this.validMoves = [];
    this.moveStack = [];
    this.redoStack = [];
    this.render();
    this.scheduleBotIfNeeded();
  }
  updateMode() {
    const newMode = document.querySelector('input[name="mode"]:checked').value;
    this.mode = newMode;
    this.botSideSelect.style.display =
      this.mode === "bot" ? "inline-block" : "none";
    this.reset();
  }
  setBotSide() {
    this.botSide = this.botSideSelect.value;
    this.scheduleBotIfNeeded();
  }
  scheduleBotIfNeeded() {
    if (
      this.mode === "bot" &&
      !this.state.over &&
      this.board.turn === this.botSide
    ) {
      setTimeout(() => this.botMove(), 350);
    }
  }
  pushHistory() {
    this.moveStack.push(this.serializeState());
    this.redoStack = [];
  }
  undo() {
    if (this.moveStack.length === 0) return;
    this.redoStack.push(this.serializeState());
    const last = this.moveStack.pop();
    this.deserializeState(last);
    this.selected = null;
    this.validMoves = [];
    this.render();
    this.scheduleBotIfNeeded();
  }
  redo() {
    if (this.redoStack.length === 0) return;
    this.moveStack.push(this.serializeState());
    const future = this.redoStack.pop();
    this.deserializeState(future);
    this.selected = null;
    this.validMoves = [];
    this.render();
    this.scheduleBotIfNeeded();
  }
  // Serialize and deserialize for undo/redo
  serializeState() {
    // JSON serialization of everything needed to fully restore the Board & control state
    return JSON.stringify({
      board: this.boardToObj(),
    });
  }
  deserializeState(stateJSON) {
    const state = JSON.parse(stateJSON);
    this.restoreBoardFromObj(state.board);
  }
  boardToObj() {
    // Board and game controls (castling, en passant, turn etc)
    return {
      grid: this.board.grid.map((row) =>
        row.map((p) =>
          p
            ? {
                type: p.type,
                color: p.color,
                hasMoved: p.hasMoved,
                justDoubleMoved: p.justDoubleMoved,
              }
            : null
        )
      ),
      enPassantTarget: this.board.enPassantTarget,
      whiteCanCastleKing: this.board.whiteCanCastleKing,
      whiteCanCastleQueen: this.board.whiteCanCastleQueen,
      blackCanCastleKing: this.board.blackCanCastleKing,
      blackCanCastleQueen: this.board.blackCanCastleQueen,
      turn: this.board.turn,
      halfMoveClock: this.board.halfMoveClock,
      fullMoveNum: this.board.fullMoveNum,
    };
  }
  restoreBoardFromObj(obj) {
    this.board.grid = obj.grid.map((row) =>
      row.map((p) => (p ? Object.assign(new Piece(p.type, p.color), p) : null))
    );
    this.board.enPassantTarget = obj.enPassantTarget
      ? { ...obj.enPassantTarget }
      : null;
    this.board.whiteCanCastleKing = obj.whiteCanCastleKing;
    this.board.whiteCanCastleQueen = obj.whiteCanCastleQueen;
    this.board.blackCanCastleKing = obj.blackCanCastleKing;
    this.board.blackCanCastleQueen = obj.blackCanCastleQueen;
    this.board.turn = obj.turn;
    this.board.halfMoveClock = obj.halfMoveClock;
    this.board.fullMoveNum = obj.fullMoveNum;
  }
  // --- COMPUTER BOT (Random move or greedy capture) ---
  botMove() {
    if (this.state && this.state.over) return;
    if (this.mode !== "bot" || this.board.turn !== this.botSide) return;
    let moves = this.board.getAllLegalMoves(this.board.turn);
    if (moves.length === 0) return;
    // Basic bot: if possible, take capture; else random move.
    let captures = moves.filter((m) => {
      const target = this.board.getPiece(m.to.x, m.to.y);
      return target != null;
    });
    let move = null;
    if (captures.length) {
      // Take the most valuable capture
      const values = { P: 1, N: 3, B: 3, R: 5, Q: 9, K: 99 };
      captures = captures.sort(
        (a, b) =>
          values[this.board.getPiece(b.to.x, b.to.y).type] -
          values[this.board.getPiece(a.to.x, a.to.y).type]
      );
      move = captures[0];
    } else {
      // Or just random move
      move = moves[Math.floor(Math.random() * moves.length)];
    }
    this.pushHistory();
    this.board.performMove(
      move.from.x,
      move.from.y,
      move.to.x,
      move.to.y,
      move.meta
    );
    this.afterMove();
  }
}

// Start game when document loaded
window.onload = function () {
  new ChessGame();
};
