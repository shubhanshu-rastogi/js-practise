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

const employees = [
  { name: "Anna", years: 5, role: "QA" },
  { name: "John", years: 2, role: "Developer" },
  { name: "Lily", years: 6, role: "Manager" }
];

const formattedEmp=employees.filter(employee => employee.years >=5)
                    .map(employee => `${employee.name} - ${employee.role} (${employee.years} years)`);

console.log(formattedEmp);