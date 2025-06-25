const arr = [1, [2, [3, [4]]]];
console.log(arr.flat());

console.log(arr.flat(2));

console.log(arr.flat(3));


const userGroups = [
  [
    { name: "Alice", verified: true },
    { name: "Bob", verified: false }
  ],
  [
    { name: "Charlie", verified: true },
    { name: "David", verified: false }
  ]
];

const verifiedUsers=userGroups.flat().filter(user => user.verified).map(user=>user.name);

console.log(verifiedUsers);