const nested = [[1, 2], [3, 4], [5]];

const flat=nested.reduce((acc,arr)=> acc.concat(arr),[]);

console.log(flat);

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

const count=fruits.reduce((acc,fruit)=>{
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
},{});

console.log(count);