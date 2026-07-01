// // Object destructuring is a JavaScript feature that lets you extract properties from an object and store them in variables in a concise way.
// const course = {
//         cousename: "js in =hindi",
//         price: "999",
//         courseInstructor: "hitesh"

//     }
//     // course.courseInstructor
// const { courseInstructor: inst } = course;
// console.log(inst);

// // destructuring with single property.
// const course = {
//     courseName: "JavaScript",
//     price: 999,
//     instructor: "Hitesh"
// };

// const { courseName } = course;

// console.log(courseName);


// // destructure with multiple property.

// const course = {
//     courseName: "JavaScript",
//     price: 999,
//     instructor: "Hitesh"
// };

// const { courseName, price, instructor } = course;

// console.log(courseName);
// console.log(price);
// console.log(instructor);



// //Renaming a variale.

// const course = {
//     courseName: "JavaScript",
//     price: 999,
//     instructor: "Hitesh"
// };

// const { instructor: teacher } = course;

// console.log(teacher);



// // Default value 
// const user = {
//     name: "Rahul"
// };

// const { name, age = 18 } = user;

// console.log(name);
// console.log(age);



// // Nesting destructuring.
// const student = {
//     name: "Aman",
//     marks: {
//         math: 90,
//         science: 95
//     }
// };

// const {
//     marks: { math, science }
// } = student;

// console.log(math);
// console.log(science);



// // using a fucntion as a parameter.
// function printUser(user) {
//     console.log(user.name);
//     console.log(user.age);
// }

// function printUser({ name, age }) {
//     console.log(name);
//     console.log(age);
// }

// printUser({
//     name: "Amit",
//     age: 22
// });



// // real world api
// const response = {
//     success: true,
//     data: {
//         id: 1,
//         name: "Laptop",
//         price: 50000
//     }
// };

// const {
//     data: { name, price }
// } = response;

// console.log(name);
// console.log(price);