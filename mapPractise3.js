const names= ["Tom", "Jerry", "Spike"];

const result=names.map((name,index)=>({
    id: index,
    name: name
}));

console.log(result);

const users = [
  { name: "Alice", age: 17 },
  { name: "Bob", age: 22 },
  { name: "Eve", age: 18 }
];

const adultUser=users.filter(user => user.age >=18).map(user => user.name);

console.log(adultUser);

const products = [
  { name: "Laptop", price: 1200, currency: "USD" },
  { name: "Phone", price: 800, currency: "USD" }
];

const productDes = products.map(p=>`${p.name}:${p.price}-${p.currency}`);

console.log(productDes);