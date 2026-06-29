import math

# Day 1 - 30DaysOfPython Challenge

print(3 + 4)  # addition(+)
print(3 - 4)  # subtraction(-)
print(3 * 4)  # multiplication(*)
print(3 / 4)  # division(/)
print(3**4)  # exponential(**)
print(3 % 4)  # modulus(%)
print(3 // 4)  # Floor division operator(//)

# Checking data types
print(type(10))  # Int
print(type(3.14))  # Float
print(type(1 + 3j))  # Complex number
print(type("Asabeneh"))  # String
print(type([1, 2, 3]))  # List
print(type({"name": "Asabeneh"}))  # Dictionary
print(type({9.8, 3.14, 2.7}))  # Set
print(type((9.8, 3.14, 2.7)))  # Tuple


# Exercise: Level 3
# Write an example for different Python data types such as Number(Integer, Float, Complex), String, Boolean, List, Tuple, Set and Dictionary.

a = 10
name = "indrit"
b = 3.14
c = 1 + 3j
t = True

dict = {"name": "indrit", "age": 20, "country": "Albania"}

list = [1, 2, 3, 4, 5]
tuple = (1, 2, 3, 4, 5)
set = {1, 2, 3, 4, 5}

# Find an Euclidean distance between (2, 3) and (10, 8)
a = (2, 3)
b = (10, 8)

dist = math.sqrt((b[0] - a[0]) ** 2 + (b[1] - a[1]) ** 2)

print("the distance is", dist)
