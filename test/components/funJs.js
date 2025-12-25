// map, filter, reduce, find, findIndex, some, every, includes, 
// sort, slice, splice, shift, unshift, concat, join, indexOf,
// lastIndexOf, flat, flatMap, reverse 
// ✅ map – Transform each element
// map – Creates a new array by applying a function to each element.
// const nums = [1, 2, 3];
// const squared = nums.map(n => n * n);
// console.log(squared); // [1, 4, 9]
// ✅ filter – Keep elements that match a condition
// filter – Returns a new array with elements that pass a test.
// const nums = [1, 2, 3, 4];
// const evens = nums.filter(n => n % 2 === 0);
// console.log(evens); // [2, 4]
// ✅ reduce – Accumulate a single result
// reduce – Reduces array to a single value using a function.
// const nums = [1, 2, 3, 4];
// const sum = nums.reduce((acc, val) =>acc + val, 0);
// console.log(sum); // 10
// ✅ find – First match based on condition
// find – Returns the first element that matches a condition.
// const nums = [1, 5, 10];
// const found = nums.find(n => n > 4);
// console.log(found); // 5
// ✅ findIndex – Index of first match
// findIndex – Returns the index of the first matching element.
// const nums = [1, 5, 10];
// const index = nums.findIndex(n => n > 4);
// console.log(index); // 1
// ✅ some – At least one matches?
// some – Checks if at least one element matches a condition.
// const nums = [1, 3, 5];
// const hasEven = nums.some(n => n % 2 === 0);
// console.log(hasEven);  false
// ✅ every – All must match
// every – Checks if all elements match a condition.
// const nums = [2, 4, 6];
// const allEven = nums.every(n => n % 2 === 0);
// console.log(allEven); // true
// ✅ includes – Contains a value?
// includes – Checks if an array contains a given value.
// const colors = ["red", "blue", "green"];
// console.log(colors.includes("green")); // true
// ✅ sort – Sort elements (default is lexicographic)
// sort – Sorts the array in-place based on a comparator.
// const nums = [4, 2, 1];
// nums.sort((a, b) => a - b);  //if a-b>0=no change or a-b<0=swap 
// console.log(nums); // [1, 2, 4]
// ✅ slice – Copy a portion
// slice – Returns a portion of the array without modifying it.
// const arr = [10, 20, 30, 40];
// const sliced = arr.slice(1, 3);
// console.log(sliced); // [20, 30]
// ✅ splice – Insert/remove at position
// splice – Adds/removes elements in the array (modifies it).
// const arr = [1, 2, 3];
// arr.splice(1, 1, 9);  // Remove 1 item at index 1, add 9
// console.log(arr); // [1, 9, 3]
// ✅ shift – Remove from start
// shift – Removes the first element of an array.
// const arr = [1, 2, 3];
// const first = arr.shift();
// console.log(first); // 1
// console.log(arr);   // [2, 3]
// ✅ unshift – Add to start
// unshift – Adds elements to the beginning of an array.
// const arr = [2, 3];
// arr.unshift(1);
// console.log(arr); // [1, 2, 3]
// ✅ concat – Merge arrays
// concat – Merges two or more arrays into a new one.
// const a = [1, 2];
// const b = [3, 4];
// const c = [5, 6];
// const merged = a.concat(b,c);
// console.log(merged); // [1, 2, 3, 4]
// ✅ join – Join into a string
// join – Joins all elements into a string with a separator.
// const arr = ["a", "b", "c"];
// console.log(arr.join("-")); // "a-b-c"
// ✅ indexOf – First index of a value
// indexOf – Returns the first index of a given value.
// const arr = [1, 2, 3, 2, 5, 6];
// console.log(arr.indexOf(2)); // 1
// ✅ lastIndexOf – Last index of a value
// lastIndexOf – Returns the last index of a given value.
// const arr = [1, 2, 3, 2];
// console.log(arr.lastIndexOf(2)); // 3
// ✅ flat – Flatten nested arrays
// flat – Flattens nested arrays into a single array.
// const arr = [1, [2, [3]]];
// console.log(arr.flat(2)); // [1, 2, 3]
// ✅ flatMap – Map + Flatten in one step
// flatMap – Maps and flattens the result into a new array.
// const arr = [1, 2, 3];
// const mapped = arr.flatMap(x => [x, x * 2]);
// console.log(mapped); // [1, 2, 2, 4, 3, 6]
// ✅ reverse – Reverse array in place
// reverse – Reverses the order of elements in the array.
// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr); // [3, 2, 1]

// function greetUser(name) {
//   return `Hello, ${name}`;
// }

// function processUser(name, callback) {
//   return callback(name);
// }

// console.log(processUser("Ali", greetUser)); // Output: "Hello, Ali"

// ()()//ife ka used karte hai turant run karne ke liye

// function arr(){
// {  
//     (function(){
//   var  a=2
//   var  b=5
// })()
// }
//    console.log(a,b)
// }
//  arr()

// for (var i = 1; i < 3; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }

// const str= "hshs hsd enfd"

// const newStr= str.split(' ').join('')
// console.log(newStr)
// let coun={}
// for(let i=0; i<newStr.length; i++){
//     let val= newStr[i]
//     coun[val]=(coun[val]||0)+1
// }console.log(coun)

// var a= [12, 13, 14, 15, 16, 17, 18, 19, 20]
// function print( b,...a){
//     console.log(a);
// }
// print(2, 3, 4, 5, 6, 7, 8, 9, 10);

// var obj= {
//     a: 10,
//     b: 11,
//     c: 12,
//     d: 13
// };
// console.log(Object.entries(obj))

// const arr = [21, "shiree", "a", 2, "r", "mohan"];
// const number = [];
// const str = [];
// const ch = [];

// arr.forEach((el) => {
//     if (typeof el == "number") { number.push(el) }
//     else if (typeof el == "string") {
//         if (el.length > 1) { str.push(el) }
//         else ch.push(el) 
//     }

// })
// console.log(number);
// console.log(str);
// console.log(ch);

// console.log(typeof "name", typeof 31, typeof "e");



// const arr=[1, 'b', 32, 32, "navin", "c", "rohan", 2];

// const num = arr.filter(val => typeof val === "number");
// const char = arr.filter(val =>  typeof val === "string" & val.length <= 1);
// const str = arr.filter(val =>  typeof val === "string" & val.length > 1);

// console.log(num);
// console.log(char);
// console.log(str);

const obj1 = {
    name: "nilam"
}
const obj3 = {
    name: "nilam"
}
console.log(obj3[obj1])//mohan patel
console.log(obj1[obj3])//mohan