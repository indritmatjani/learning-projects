import math
# Exercises: Level 1

# 1. Write a python comment saying 'Day 2: 30 Days of python programming'

# 2. Declare a first name variable and assign a value to it
name = "Indrit"
# 3. Declare a last name variable and assign a value to it
last_name = "Matjani"
# 4. Declare a full name variable and assign a value to it
full_name = name + last_name
# 5. Declare a country variable and assign a value to it
country = "Italy"
# 6. Declare a city variable and assign a value to it
city = "Padua"
# 7. Declare an age variable and assign a value to it
age = 28
# 8. Declare a year variable and assign a value to it
year = 1990
# 9. Declare a variable is_married and assign a value to it
is_married = False
# 10. Declare a variable is_true and assign a value to it
is_true = True
# 11. Declare a variable is_light_on and assign a value to it
is_light_on = False
# 12. Declare multiple variables on one line
var1, var2, var3 = 2, "c", True

# Exercises: Level 2

# 1. Check the data type of all your variables using the type() built-in function
print(type(name))
print(type(last_name))
print(type(full_name))
print(type(age))
print(type(city))
print(type(country))
print(type(year))
print(type(is_married))
print(type(is_true))
print(type(is_light_on))
# 2. Using the len() built-in function, find the length of your first name
len(name)
# 3. Compare the length of your first name and your last name
print(len(name) == len(last_name))
# 4. Declare 5 as num_one and 4 as num_two
num_one = 5
num_two = 4
# 5. Add num_one and num_two and assign the value to a variable total
total = num_one + num_two
# 6. Subtract num_two from num_one and assign the value to a variable diff
diff = num_one - num_two
# 7. Multiply num_two and num_one and assign the value to a variable product
product = num_two * num_one
# 8. Divide num_one by num_two and assign the value to a variable division
division = num_one / num_two
# 9. Use modulus division to find num_two divided by num_one and assign the value to a variable remainder
reminder = num_one % num_two
# 10. Calculate num_one to the power of num_two and assign the value to a variable exp
exp = num_one**num_two
# 11. Find floor division of num_one by num_two and assign the value to a variable floor_division
floor_division = num_two // num_one
# 12. The radius of a circle is 30 meters.
radius = 30

#     - Calculate the area of a circle and assign the value to a variable area_of_circle

area_of_circle = math.pi * radius
#     - Calculate the circumference of a circle and assign the value to a variable circum_of_circle
circum_of_circle = 2 * math.pi * radius

#     - Take radius as user input and calculate the area
input_radius = input("put radius: ")
area_of_circle = math.pi * float(input_radius)

# 13. Use the built-in input() function to get first name, last name, country and age
#     from a user and store the values to their corresponding variable names

name = input("inserisci nome")
cognome = input("inserisci cognome")
eta = input("inserisci eta")
country = input("inserisci country")


# 14. Run help('keywords') in Python shell or in your file
#     to check for the Python reserved words or keywords
help("Keyboards")
