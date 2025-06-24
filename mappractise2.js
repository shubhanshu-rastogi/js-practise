const users = [
  { id: 1, username: "alice" },
  { id: 2, username: "bob" },
  { id: 3, username: "charlie" }
];

const names=users.map(u=>u.username);

console.log(names);

const namearr=["john", "doe", "smith"];

const uname=namearr.map(n=>n.charAt(0).toUpperCase()+n.slice(1));

console.log(uname);

const Input=[1, 2, 3, 4];
const evenOdd=Input.map(nu=>nu%2==0 ? "Even" : "Odd");

console.log(evenOdd);

const scores = [85, 42, 90, 65];

const graded = scores.map(score => ({
  score,
  grade: score >= 90 ? "A" :
         score >= 80 ? "B" :
         score >= 70 ? "C" :
         score >= 60 ? "D" : "F"
}));

console.log(graded);