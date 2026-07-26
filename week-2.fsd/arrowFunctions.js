// Program to demonstrate Arrow Functions
// 1. Traditional Function
function calculateSquare(num) {
    return num * num;
}
// 2. Arrow Function
const calculateCube = (num) => {
    return num * num * num;
};
// 3. Shorthand Arrow Function
const greet = (name) => `Hello, ${name}!`;
// ---- Testing ----
const value = 5;
console.log(greet("Pavani"));
const square = calculateSquare(value);
console.log(`Square: ${square}`);
const cube = calculateCube(value);
console.log(`Cube: ${cube}`);
export {};
