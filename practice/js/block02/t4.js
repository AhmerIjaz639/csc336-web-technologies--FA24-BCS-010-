const product = { id: 1, name: "Shoes", price: 2500 };

const { name, price } = product;
const { name: pName, discount = 0 } = product;

const user = { info: { city: "Lahore" } };
const { info: { city } } = user;

const id = 1, title = "Book";
const item = { id, title };

const updated = { ...product, price: 2000 };

console.log(name, price);        // Shoes 2500
console.log(pName, discount);    // Shoes 0
console.log(city);               // Lahore
console.log(item);               // { id: 1, title: 'Book' }
console.log(updated);            // { id: 1, name: 'Shoes', price: 2000 }
console.log(product.price);      