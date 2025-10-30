
# प्रोग्रममिंग बाय कोड

# प्रोग्रम्मिंग बाय कोड
# नित्यारा नायर  दैमोंड


# # print
# print("hello")

# #  variable
# age = 20
# print (age)

# name = input ("whts your name? " )
# print("hello" + name)

#  birth year teller
# birthyr = input("enter your birht year")
# age = 2023 -  int(birthyr)
# print (age)


# # all at once calculator
# first = float( input("first:"))
# second =float (input("second:"))

# mul = first * second
# sum = first + second
# sub = first - second
# div = first / second
# doubdiv = first // second
# expo = first ** second
# mod = first % second
# print(sum,mul,sub,div,mod)


# cor = "python programming "
# print(cor.upper())
# print(cor.find('i'))
# print(cor.replace('ming', ''))
# print('python' in cor)


# x = 10 + (3 * 2)
# print(x)
# x = (10 + 3) * 2
# print(x)

#  coanditiona satetments
# x = 5


# x +=5
# print(x)

# price = 25
# print(price<12 or price >40)

# tem =25
# if tem > 30:
#     print("it's ahot day'")
#     print("sdc ")
# elif tem >20:
#     print("dsfd")
# elif tem > 10:
#     print("3r3")


# # kilo or pounds
# weight = int(input("weight:"))
# unit = input("(K)g or (L)bs:")
# if unit.upper()== "K":
#     converted = weight / 0.45
#     print("weight in lbs: "+ str( converted))
# else:
#     converted= weight * 0.4
#     print("weight in kg:" + str(converted))



# # while loop
# i=0
# while i <=5:
#     print(i )
#     i  = i+1

# while i <=5:
#     print(i * "@" )
#     i  = i+1

# # list
# names = ['jhon', "bob", "mosh", "sam", "mary"]
# print(names[0])
# print(names[-1])

# names[0]= "jon"
# print(names[0])

# print(names[0:3])




# num = [1,2,3,4,5]
# num.append(6)
# num.insert(0, -1)
# num.remove(3)
# print(num)
# print(1 in num)
# print(len(num))

# for item in num:
#     print(item)

# # same as for

# i=0
# while i < len(num):
#     print(num[i])
#     i = i + 1


# numbers = range(5,10, 2)
# print(numbers)
# for number in numbers:
#   print(number)
#   print(numbers)


# tuple are imutable
# num = (1,2,3,4)
# print (num.index(1))
# print(num())+

# x = '789'
# x = int(x,8) #op octal value n 2 binary ...
# print ((x))



# a = 123
# a = print(2344) # 2344
# print(a) # none




# a = "isi  ifv"
# b = 1324
# a= b
# b=a
# print (a) ###### 1324



# a = "hello"
# b = 1324
# a== b
# b=a
# print (a) ###### hello



# a=+1
# print(a) ### 1


# a=-1
# print(a) ## -1


# a = "hello"
# a= a + a ##conacatinate
# print(a)##hellohello   o/p


# a = 1000
# a= a/3 ###float type
# a = a*3
# print (a) ###o/p 1000.0







### python full tut by simplilrn 7 27 45






# x = 100
# y = 100
# print (id(x),id(y)) #### giivng only the id of 100 not x n y so both will return same id  of 100 n if one is 100 N other is 100.0 then it will give different as its float

# print(id('param')) ##2764974477552
# print(id("param"))###2764974477552 same
# print(id("Param"))###3945897534589 different
# print(id("Param"))###3945897534589 same as ( "" = '' )





### id is identity can be considerd to be the addresss

#### type  - an object type defines the possibel vaklues and operation type ()

#### value is the data actually coantianed in the object


# print(type(245j)) ### <class 'complex'>   j complex
# print(type('345'))### str
# print(type("3435"))### str

# a = 1
# str(a)
# print(int(a) , type(a)) ## o/p 1 <class 'int'>
# print(int(a) and type(a)) ### <class 'int'>
# print(int(a)  + type(a))  ## type error




### binary coanveriwson
# p= 100
# print (hex(p)) ### 0x64
# print (oct(p))### 0o144 fist zero is identifier and second value tell us the value is in which form o for octal and x hexadecimal

### numearic to coamplex
# print(complex(2,3))### take max 2 arguments  and 2 is real part and j is imagianry paart


# l = [1,2,3,true]
# l.pop(3)
# print(l) ##### error



# print(-13//2+1)  #####prints -6


# print()










# num = [1, 2, 3, [10 ,20,30,[ 33,44,55,46],55,77,88],34,56,56,77 ]


# print(num[-4][-3:9:1])




nums = [1,2,3]
print(2 in nums )
print(len(nums))

text = 'python jjg jig jg'
print(text[::-1])
print("".join(reversed(text))) 
