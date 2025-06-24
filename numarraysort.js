let numbers = [100,20,30];

console.log(numbers.sort((a,b)=>a-b));

let fruits=["kiwi",100,"banana",40, 20,"orange"];

console.log(fruits.map(String).sort());
    

let num=fruits.filter(item => typeof item === 'number');
let str = fruits.filter(item=> typeof item ==='string');

num.sort((a,b)=>a-b);
str.sort();

console.log(num);

console.log(str);

let sortedmix=[...num,...str];

console.log(sortedmix);