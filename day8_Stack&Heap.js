// Stack→ like stacking books(top book removed first)
// Heap→ like a big storage room with labels(you access by reference)



// 1. Stack Memory👉 Used
// for:
// Primitive data types
// Function calls👉 Examples of primitives:

//     string, number, boolean, null, undefined, symbol, bigint

// 👉 How it works:
//     Stored in Last In First Out(LIFO) order
// Fast access
// Stores actual value📌 Example
// let a = 10;
// let b = a;

// b = 20;

// console.log(a); // 10
// console.log(b); // 20

// ✔
// Here a and b are separate copies in stack

// 🧠 2. Heap Memory👉 Used
// for:
// Objects
// Arrays
// Functions👉 Stores:
//     Reference(address), not actual value📌 Example
// let obj1 = { name: "John" };
// let obj2 = obj1;

// obj2.name = "Alice";

// console.log(obj1.name); // Alice

// ✔
// Both point to same memory location in heap

// let myYoutubename = "manojThakur"
// let anothername = "jason"


// anothername = myYoutubename
// anothername = "chaiaurorcode"

// console.log(myYoutubenamename)
// console.log(anothername)


let myYoutubename = "manojThakur";
let anothername = "jason";

anothername = myYoutubename;
anothername = "chaiaurorcode";

console.log(myYoutubename);
console.log(anothername);




let use = {
    email: "manoj99065.gmail.com",
    up: "user@ybl"
}


let use1 = use;
use1.email = "manoj990";
console.log(use.email);
console.log(use1.email);