// 20370-INTPROG-MW-1630H
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Test case
// console.log(reverseString("hello")); // Output: "olleh"


// 21006-INTPROG-MW-1900H
function filterEvenNumbers(numbers) {
    return numbers.filter((number) => number % 2 === 0);
  }

// Test case
// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]


// 19026-INTPROG-TTh
function countProperties(obj) {
    return Object.keys(obj).length;
}

// Test case
// console.log(countProperties({ a: 1, b: 2, c: 3 })); // Output: 3


// 16543-INTPROG-FRI
function delayedGreeting(name) {
    setTimeout(() => {
        console.log(`Hello, ${name}!`);
    }, 2000);
}

// Test case
// delayedGreeting("Alice"); // Output: Hello, Alice! (after 2 seconds)


// 07948-INTPROG-SAT-1630H
function sumArray(numbers) { 
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
}

// Test case
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15