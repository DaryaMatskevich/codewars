// Instructions
// In this little assignment you are given a string of space 
// separated numbers, and have to return the highest and lowest number.

// Solution

function highAndLow(numbers) {
    let numsArray = numbers.split(' ');
    const max = Math.max(...numsArray);
    const min = Math.min(...numsArray);

    return max + ' ' + min;
}