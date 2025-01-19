function foo(a, b) {
  if (a === null || b === null) {
    // Option 1: Return NaN
    return NaN; 
    // Option 2: Throw an error
    // throw new Error('One or both inputs are null');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(null, null)); // Output: NaN