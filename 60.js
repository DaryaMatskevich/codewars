// Instructions
// In this simple assignment you are given a number and have to make it negative.
// But maybe the number is already negative?

// Solution

function makeNegative(num) {
    if (num < 0) {
        return num
    }
    else if (num === 0) {
        return 0;
    }
    else if (num > 0) {
        return -num;
    }
}