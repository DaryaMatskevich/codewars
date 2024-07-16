// Instructions
// Convert number to reversed array of digits
// Given a random non - negative number, you have to return the digits of this number within an array in reverse order.

// Solution

function digitize(n) {
    let nArray = n.toString().split("");
    let nArrayReverse = nArray.reverse();
    return nArrayReverse.map(Number);
}