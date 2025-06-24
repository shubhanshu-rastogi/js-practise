const input = [0, "hello", false, 42, "", null];

const filtered=input.filter(Boolean);

console.log(filtered);

const newinput=["hi", "hello", "javascript", "bye"];

const newi=newinput.filter(val => val.length >=5);

console.log(newi);

const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Eve", active: true }
];

const newusers=users.filter(user=> user.active);

console.log(newusers);

const students = [
  { name: "Alice", grades: [55, 60, 70] },
  { name: "Bob", grades: [30, 50, 60] },
  { name: "Eve", grades: [80, 90, 100] }
];


const passedAll=students.filter(name => name.grades.every(grade => grade >=50));

console.log(passedAll);