let number=[10,20,30];
let doubled=number.map(num=>num*2);


console.log(doubled);

number.map

const books = [
  { title: "1984", author: "George Orwell" },
  { title: "Sapiens", author: "Yuval Noah Harari" }
];


const bookTitle=books.map(bn=>bn.title);

console.log(bookTitle);

const words = ['hello', 'world'];

const capitalized=words.map(word=>word.charAt(0).toUpperCase()+word.slice(1));

console.log(capitalized);

let users=['user1','user2'];

let testUsers=users.map(u=>({username:u,password:"Test@123"},{username:u,password:"Test@123"}));

console.log(testUsers);