const products = [
  { name: "Shoes", price: 2500, category: "footwear" },
  { name: "Shirt", price: 1200, category: "clothing" },
  { name: "Sneakers", price: 3000, category: "footwear" },
  { name: "Jeans", price: 1800, category: "clothing" },
  { name: "Socks", price: 300, category: "footwear" }
];

const footware= products
    .filter(p=>p.category==="footwear")
    .map(p=>({name:p.name,price:p.price}))
    .filter(p=>p.price>1000);
console.log(footware);