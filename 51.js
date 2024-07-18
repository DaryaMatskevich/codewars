// Instructions
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns 
// it in cm per second, rounded down to the integer (= floored).

// Solution

function cockroachSpeed(s) {
    let newS = 100000 / 3600;
    let smPerSecond = s * newS;
    return Math.floor(smPerSecond);
}