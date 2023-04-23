// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Pseudo code:
    //input: Create a function called fruitLength that takes in two different strings  that we are going to compare against each other.
    //output: a single string denoting whichever string is longer; will probabyl use conditional statements in conjunction with the (.length) built-in method
    //method: conditional statement shall check if "fruit1" is longer than fruit2, and return the appropriate string, if its not longer, we can use "else" to print the "fruit2"

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// const fruitLength = (fruit1, fruit2) => {
//     if (fruit1.length > fruit2.length){
//         return fruit1
//     } else
//     return fruit2
//  }
// console.log(fruitLength(fruit1, fruit2))
    //actual outcome: banana

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

console.log(fruitLength(fruit3, fruit4))
    //actual outcome: cherry. 
    //I used the function created in the steps above, but passed fruit3 and fruit4 as the parameters instead of fruit1 and fruit2

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Pseudo code:
    //input: I will create a function called tempCheck that will take in the numbers provided in the exercices below, and compare them against the boiling point (212). i will use if, else, else if statements to ensure the appropriate response is recieved.
    //output: the output willl utilize ${num} to specify the number that is getting checked
    //method: use "if" to check if the number > boiling point. use "if else" to check if the number is < boiling point, and use "else" if the number ===boiling point.

const temperature1 = 42
// Expected output: "42 is below boiling point"

    // const tempCheck = (temperature1) => {
    //     if (temperature1 === 212) {
    //         return `${temperature1} is at the boiling point`
    //     } else if (temperature1 < 212) {
    //         return `${temperature1} is below the boiling point`
    //     } else
    //         return `${temperature1} is above the boiling point`
    //     }
        
    
       // console.log(tempCheck(temperature1))
       //actual output: 42 is below the boiling point. Struggled HARD because i kept using the single quotation mark instead of backticks

const temperature2 = 350
// Expected output: "350 is above boiling point"

        //console.log(tempCheck(temperature2))
        //actual output: 350 is above the boiling point. Easy money, just plugged in the second temperature value into the function i created above

const temperature3 = 212
// Expected output: "212 is at boiling point"

        //console.log(tempCheck(temperature3))
        //actual output: 212 is at the boiling point. Again, easy  money, plugged in the third temperature value into the function i created above.

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Pseudo code: 
    //input: The two test variables provided below, which are two arrays with numbers.
    //output: for the first part of this question, a single array with all of the number values inside it, and can save that new array with a diff variable. For the second part, output should be the number 9
    //method: use concatination to combine the arrays, and then use the (.length) property to count the items in the array

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9
    // var mixedArrays = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
    // console.log(mixedArrays)
    // console.log(mixedArrays.length)

    //actuall output:[2, 5, 2, 2, 4, 6, 3, 5, 3]; 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Pseudo code: 
    //input: the string provided below
    //output: that same string, but with the characters reversed. 
    //method: turn the string into an array with .split(), use .reverse() to arrange the values in opposite order, and then use .join() to bring them back together as a string.

const currentCohort = "Charlie 2023"
// Expected output: "3202 eilrahC"
    // let newArray = currentCohort.split("")
    // //console.log(newArray)
    // let reverseArray = newArray.reverse()
    // //console.log(reverseArray)
    // let joinArray = reverseArray.join("")
    // console.log(joinArray)

    //actual output:3202 eilrahC

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Pseudo code:
    //input: the variables provided below, which contains an array
    //output: a numerical value, denoting the indexed position of the number its asking for
    //method: use .lastIndexOf() because the array has multiple repeated values. The 'expected output' included below suggests that values we're looking for are NOT the first ones in the array

const numberOfConnections = [13, 34, 42, 5, 5, 10, 27, 42, 10]

const givenValue1 = 42
// Expected output: 7
    //console.log(numberOfConnections.lastIndexOf(givenValue1))
    //Actual output: 7

const givenValue2 = 10
// Expected output: 8
    //console.log(numberOfConnections.lastIndexOf(givenValue2))
    //actual output: 8

// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Pseudo code:

    // input: the variables provided below, which include two arrays 
    // output: an array, in which the values are sorted in descending numeric value
    // method: used code that was provided in the syllabus as a template


const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

    // sanDiegoSummerTemperatures.sort(function(a, b) {return b-a})
    // console.log(sanDiegoSummerTemperatures)
    // actual output: [
    //     82, 80, 79, 77,
    //     76, 73, 72
    //   ] for some reason, all of my arrays were printing like this. 
      
const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]
    // sanDiegoWinterTemperatures.sort(function(a, b) {return b-a})
    // console.log(sanDiegoWinterTemperatures)
    //Actual output:[
    //   68, 67, 66, 66,
    //   62, 59, 59
    // ]
