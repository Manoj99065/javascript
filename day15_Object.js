//  object liters
let mysym = Symbol("hiii");
const jsuser = {
    name: "manoj",
    age: 22,
    [mysym]: "tata",
    location: "panchkula",
    email: "manoj99065@gamil.com",
    isLogged: false,
    lastLoginDays: ["Monday", "Saturday"],
    "Full Name": "Manoj Kumar"

}


console.log(jsuser.name);
console.log(jsuser["Full Name"]);
console.log(jsuser[mysym]);
// console.log(jsUser.key() );

// Object.freeze(jsuser);
jsuser.email = "manoj.com";
console.log(jsuser.email);


//  print function here.
jsuser.greeting = function() {
    console.log("Hello js i am fucntion");
}

console.log(jsuser.greeting());

jsuser.greetingTwo = function() {
    console.log(`hello js user ${this.name}`);
}


console.log(jsuser.greetingTwo());
console.log(jsuser);


// create oject using constructor.

let obj = new Object();
obj.name = "Sorav";
obj.Age = 33;
obj.address = "vilalage mahamalj";

console.log(obj);

console.log(obj["Age"]);
obj.Age = 23;
// obj = { model: "Tesla" };
obj.color = "Red";
// let obj = { model: "Tesla", color: "Red" };
console.log("color" in obj);
delete obj.color;

console.log(obj);
console.log("color" in obj);

// console.log(obj);
console.log(Object.keys(obj).length);
console.log(obj);

// let obj = { name: "Sourav" };
console.log(typeof obj === "object" && obj !== null);
// let obj = { name: "Sourav", age: 23 };
for (let key in obj) {
    console.log(key + ": " + obj[key]);

}

// Assigne method is use

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = {
    6: "a",
    7: "b"

};
const obj4 = Object.assign(obj1, obj2, obj3);
console.log(obj4);