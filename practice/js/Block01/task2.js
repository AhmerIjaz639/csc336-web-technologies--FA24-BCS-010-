function add(a, b) {
  return a + b;
}
const sub = function (a, b) {
  return a - b;
};

const mul = (a, b) => a * b;
const square = (n) => n * n;

function greet(name = "guest") {
  return "hi " + name;
}

console.log(add(5, 45));
console.log(sub(5, 45));
console.log(mul(5, 45));
console.log(greet());

function calculate(price, qty, tax = 0.17) {
  return price * qty * (1 + tax);
}

const age = (age) => age > 18;

function makegreet() {
  function hi(name = "JS") {
    return "hello " + name;
  }
  return hi;
}

const hello=makegreet();
console.log(hello("ali"));


