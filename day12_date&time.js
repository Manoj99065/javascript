const d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth());
console.log(d.getDate());
console.log(d.getDay());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());



// here we are setting time.
const d = new Date();
console.log(d.setFullYear(2030));
console.log(d.setMonth(0));
console.log(d.setDate(15));


// set time and date.

const d = new Date();
console.log(d.toDateString()); // "Tue Jun 30 2026"
console.log(d.toTimeString()); // time part
console.log(d.toISOString()); // "2026-06-30T..."
console.log(d.toLocaleString()); // local format


console.log(Date.now()); // current timestamp in milliseconds
const d = new Date();
console.log(d.getTime());

const d = new Date();
console.log(d.getTime());