let fruits = ["apple", "banana"];

fruits.push("orange","kiwi");

console.log(fruits);

let removedFruit=fruits.pop();

console.log(removedFruit);

console.log(fruits);

let firstFruit=fruits.shift();
console.log(firstFruit);
console.log(fruits);

fruits.unshift("watermelon","lime");

console.log(fruits);

fruits.splice(1,1,"mango");

//fruits.forEach(fruit => console.log(fruit));

fruits.reverse();
console.log(fruits);
