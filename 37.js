// Instructions
// When provided with a number between 0-9, return it in words.
// Input :: 1
// Output :: "One".

// Solution

function switchItUp(number) {
    const words = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    return words[number];
}