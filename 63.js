// Instructions
// Your task is to make a function that can take any non-negative integer as 
// an argument and return it with its digits in descending order. 
// Essentially, rearrange the digits to create the highest possible number.

// Solution

function descendingOrder(n) {
    let nString = n.toString().split("");
    nString.sort((a, b) => b - a);
    return Number(nString.join(""));
}