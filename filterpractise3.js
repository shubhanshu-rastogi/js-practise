const products = [
  { name: "TV", price: 800 },
  { name: "Smartphone", price: 1200 },
  { name: "VR", price: 1500 },
  { name: "Laptop", price: 1000 }
];

const expProdShortName = products.filter(product => product.price >1000 && product.name.length < 3)
                        .map(product => product.name);

console.log(expProdShortName);

const users = [
  { name: "Alice", phone: " 123-456-7890 ", verified: true },
  { name: "Bob", phone: "000-000-0000", verified: false },
  { name: "Charlie", phone: "987-654-3210", verified: true }
];

const nomnalizePhone =users.filter(user => user.verified).map(user => user.phone.trim().replace(/-/g,""));

console.log(nomnalizePhone);