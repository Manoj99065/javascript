const name = "Manoj"
const repoCount = 50

// console.log(name + repoCount + "value");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("manoj");
console.log(gameName);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));







const newString = gameName.substring(0, 4);
console.log(newString);
const anotherString = gameName.slice(1, 2)
console.log(anotherString);


// trim keyword is uses to remove the space.

let str = "man asjkdfj      asdf  as   a";
let result = str.replace(/\s+/g, " ");

console.log(result.trim());


let str = "   man asjkdfj   asdf   as   a   ";

let result = str.trim().replace(/\s+/g, " ");

console.log(result);