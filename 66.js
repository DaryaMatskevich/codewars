// Instructions
// Complete the function that accepts a string parameter, and reverses each word in the string. 
// All spaces in the string should be retained.

// Solution

function reverseWords(str) {
    let newStr = str.split(" ");
    let reversedStr = newStr.map(word => word.split("").reverse().join(""));
    return reversedStr.join(" ");
}