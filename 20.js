// Instructions
// Write a function to convert a name into initials.This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.

// Solution

function abbrevName(name) {
    let names = name.split(" ");
    let initials = names[0].charAt(0).toUpperCase() + "." + names[1].charAt(0).toUpperCase();
    return initials
}