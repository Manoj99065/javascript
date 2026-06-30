// // creating an array.
// let arr = [10, 20, 30, 40, 50];
// console.log(arr);


// Creating and Initializing an array with values
let a = new Array(10, 20, 30);

console.log(a);
console.log(a[0]);


// Creating an Array and Initializing with Values
let B = ["HTML", "CSS", "JS"];

// Accessing First Array Elements
let fst = B[0];

console.log("First Item: ", fst);
let Ist = B[B.length - 1];
console.log("Last element is : = ", Ist);



// Creating an Array and Initializing with Values
let C = ["HTML", "CSS", "JS"];
console.log(C);

a[1] = "Bootstrap";
console.log(C);
C.push("D");
console.log(C);
C.pop();
console.log(C);
C.unshift("Web Development");
console.log(C);

C.shift();
console.log("After Removing the First: ", C);
C.splice(1, 2);
console.log("After Removing 2 elements starting from index 1: " + C);



// Creating an Array and Initializing with Values
let D = ["HTML", "CSS", "JS"];

// Iterating through forEach loop
D.forEach(function myfunc(x) {
    console.log(x);
});



// Creating an Array and Initializing with Values
let A = ["HTML", "CSS", "JS", "React"];
let BB = ["Node.js", "Express.js"];

// Concatenate both arrays
let concateArray = A.concat(BB);

console.log("Concatenated Array: ", concateArray); // Creating an Array and Initializing with Values
let AA = ["HTML", "CSS", "JS"];

// Check type of array
console.log(typeof AA);