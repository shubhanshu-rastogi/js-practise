const numbers=[1, 2, 2, 3, 4, 4, 5];

const uniquenum=numbers.filter((num,index,arr) => arr.indexOf(num)===index);

console.log(uniquenum);

const users = [
  { name: "Alice", active: true, email: "alice@example.com" },
  { name: "Bob", active: false, email: "bob@example.com" },
  { name: "Eve", active: true, email: "eve@example.com" }
];

const activeEmails=users.filter(user => user.active).map(user => user.email);

console.log(activeEmails);

const students = [
  { name: "Tom", scores: [80, 70, 60] },
  { name: "Jerry", scores: [100, 40, 50] },
  { name: "Spike", scores: [90, 90, 90] }
];


const passedStudent=students.filter(student => student.scores.every(score=> score >50)).map(student => student.name);

console.log(passedStudent);