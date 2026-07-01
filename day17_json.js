// JSON(JavaScript Object Notation) is a lightweight format used to exchange data between a client and a server.

// Most APIs send and receive data in JSON format. 
// {
//     "name": "manoj",
//     "coursename": "jsin hindi",
//     "Price": "Free"

// }

// [
//     {},
//     {},
//     {}
// ]


// // json syntax.

// // Rules of JSON
// // Keys must be inside double quotes(").
// //         String values use double quotes.Numbers, booleans, arrays, objects, and null are allowed.No comments are allowed in JSON.No functions are allowed in JSON. 
// //Keys must have double quotes.
// //Functions are not allowed. 

// {
//     "name": "Hitesh",
//     "age": 25,
//     "city": "Delhi"
// }


// // Json array object.

// [{
//         "id": 1,
//         "name": "Thor"
//     },
//     {
//         "id": 2,
//         "name": "Ironman"
//     },
//     {
//         "id": 3,
//         "name": "Spiderman"
//     }
// ]


// {
//     "success": true,
//     "message": "Data fetched successfully",
//     "data": {
//         "id": 1,
//         "name": "Laptop",
//         "price": 50000
//     }
// }

// const response = {
//     success: true,
//     message: "Data fetched successfully",
//     data: {
//         id: 1,
//         name: "Laptop",
//         price: 50000
//     }
// };

// console.log(response.data.name);
// console.log(response.data.price);



// //convert object into json

// const user = {
//     name: "Hitesh",
//     age: 25
// };

// const jsonData = JSON.stringify(user);

// console.log(jsonData);



// // convert json into object.
// const jsonData = '{"name":"Hitesh","age":25}';

// const user = JSON.parse(jsonData);

// console.log(user.name);
// console.log(user.age);


// //fetch data from api
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });


// //Rael world example.
// // {
// //     "product": {
// //         "id": 101,
// //         "title": "iPhone 16",
// //         "price": 79999,
// //         "stock": 20
// //     }
// // }

// const response = {
//     product: {
//         id: 101,
//         title: "iPhone 16",
//         price: 79999,
//         stock: 20
//     }
// };

// console.log(response.product.title);
// console.log(response.product.price);