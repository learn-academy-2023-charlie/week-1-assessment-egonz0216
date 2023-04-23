// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: Actual output: 5; When printing something using the .push() built-in method, the only thing that will be printed will be the number of items in the array. To print the new array, i would need to invoke colors after the push() command -> console.log(colors)


// --------------------1) What will this log?

const cohort = "LEARN 2023"
// console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: actual ouput: 10; the .length() built-in method counts all of the characters within a string, including spaces.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: o
// b) Verify and explain: Actual output: [o]; when using [] with a number between them, we are asking for the character in that particular position. Since strings are zero-indexed, we count 0-4 and ghet to the "o" in "hello"

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: Ruby
// b) Verify and explain: actual answer: Ruby; const index is defined to be the "one" position in this zero-indexed array. Ruby is at the one position, so printing index takes returns the value at one within the array

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: Saturday, Sunday
// b) Verify and explain: Actual output: TypeError - weekendDays.tuUpperCase is not a function.
//    In my haste to answer this I failed to realize that .toUpperCase() is not a funtion that can be used on arrays, only on strings.          

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: number
// b) Verify and explain: Actaul output: number
//    I had to look up what the "typeof" operater would do, and it apparantly returns the data type of a variable. In the command above, "typeof" asks for the type of data held in the dataTypes.length command, which is number. 
