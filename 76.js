// Instructions

// Return the number(count) of vowels in the given string.
// We will consider a, e, i, o, u as vowels for this Kata(but not y).
// The input string will only consist of lower case letters and / or spaces.

//     Solution

function getCount(str) {
    let newStr = str.split("");
    let count = 0;
    const lowels = ["a", "e", "i", "o", "u"];
    for (let i = 0; i < newStr.length; i++) {

        if (lowels.includes(newStr[i])) { count++ }
    }
    return count;
}