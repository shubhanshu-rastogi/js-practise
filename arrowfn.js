const createUser=(name,age)=> ({
    name,
    age,
    active:true
});

console.log(createUser('Shubhanshu',42));

const name = 'John';
console.log(`Hello , ${name}`);


const {names,age}={names:"Vijay",age:42};

console.log(names,age);