# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer: A statement that takes multiple conditions and checks them against one another, using `if`, `else if`, and `else` statements. We can program a function to run specific commands based on how conditions are either met or not met. We can use `if` to check for a specific condition, `else if` to check for alternative conditions, and `else` as a catch-all for remaining conditions.

Researched answer: conditional statements are what is known as either truthy or falsey, and will rum commands based on how those conditions are evalutated. `else-if` statements can be used repeatedly to check for multiple conditions, but the code is read from top to bottom, and will stop checking multiple conditions once any of them checked to be truthy.

1. What is git? What is the difference between git and Github?

Your answer: Git is a software that tracks changes made to a code. Github is the online cloud-based service that uses the git software to keep track of those changes in the cloud.

Researched answer: Git is a version control software, which is a fancy way of saying that it keeps a record of the changes made to a code. Github is a collaborative service based off of the git sowftware, that that allows for sharing of repositories and enables easier collaborative coding. 

2. Which JavaScript operators will return a Boolean value?

Your answer: conditional statements return boolean values

Researched answer: the specific operators used to return boolean values are `<`, `>`, `===`, `=>`, `&&`, `||`

1. What is the difference between an array's index and its value?

Your answer: An array's index is used to denote the position of a given value. Array's are zero-indexed, which means the first position starts at 0, not 1.  The values of an array are simply the data contained within an array. It could have strings, numbers...etc as the values.

Researched answer: Arrays contain elemements that are separated by a comma. these elements are known as the values within the array, and their positions can be mapped because the array is zero-indexed, meaning that each value in the array has a specific postition. In other words, the value is whatever data is in the array, and the index is useful to locate a specific position of that value.


4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: Arrays are denoted with square brackets, and can actaully contain strings as elements.  Stings are comninations of characters that are surrounded by quotation marks. A string is a single chain of characters that is grouped together, but an array can have multiple elements (strings or numbers) separated by commas.  there are built-in methods that work with strings, but not arrays, but there are ways to turn arrays into strings and vice versa. 

Researched answer: arrays are collections of similar data types that are stored in such a way as to have a positions, and strings are collections of characters that also have positions.  They are both zero-indexed. Arrays can have strings as elements, but strings can only have characters. Arrays are also mutable, meaning that elements within the array can be changed. But stings are immutable, which means that whenever changes to a string are made, and entirely new string is created.

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Two roles - the driver and the navigator.  The driver is responsible for actually typing out the code. The navigator has the responability to guide the driver. These guiding responsabilities include referencing the instructions to make sure that the driver is pursuing the correct objective, and also referencing notes in a quick manner to help the driver overcome blockers.

Researched answer: Driver writes code, navigator keeps the driver focused and on task. Pair programming allows for the two programmers to keep each other accountable, and also have an extra set of eyes keeping a lookout for possible mistakes. Proper pair programming is also designed to lighten the cognitive load, which is easy to do if both partners are focused on the task at hand and actively contributing.

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: these are built-in methods into javascript that are often designed to be used on arrays. The funtion passed on in the argument will be exectued for every element in the array, unlike conditional funtions, which only check conditions until the first is met.

2. Jest: a javascript testing framework (built by facebook?). allows for testing of code in a safe environment. 

3. Objects: an element that has properties unique to its data type. can use the keywork `this` to reference objects

4. Method: methods are actions that can be performed on objects. These actions are dependant on the date type.  

5. Classes: these are templates for javascript objects. are created with the keyword `class`
