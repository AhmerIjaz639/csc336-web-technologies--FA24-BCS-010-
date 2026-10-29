const fruits = ["apple", "banana", "mango"];

fruits.length;             // 3
fruits.push("kiwi");       // end add
fruits.pop();              // end remove
fruits.unshift("lemon");   // start add
fruits.shift();            // start remove
fruits.indexOf("banana");  // 1
fruits.includes("mango");  // true
fruits.join(", ");         // "apple, banana, mango"

const nums = [10, 20, 30];
nums[5] = 60;
console.log(nums.length);  
console.log(nums[3]);      