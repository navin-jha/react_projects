//  const obj={
//     name: "rahul",
//     age: 43,
//     city: "delhi"
// }
// export default obj;

// export  function add(a, b){
//     return a+b
// }
// export default function subtract(a, b){
//     return a*b
// }
// export function add(x, y) {
//   return x + y;
// }

// function subtract(a, b) {
//   return a - b;
// }


// module.exports = subtract;



// const arr = ["a", "b", 1, 2, 6, "e"];

// let first= [] , second= [];

//  arr.map((item, index) => {
//     if(isNaN(item)) {
//         first.push(item);
//     }
//     else if(!isNaN(item) ) {
//         second.push(item);
//     }else{
//         console.log('errar:items is not a number');
//     }


//  })
//  console.log("first array: ", first);
//  console.log("second array: ", second);

// const numbers = [1, 2, 3];

// const newArr=numbers.map(el => {

//   return el * 2;
// });

// console.log(newArr);
// console.log(numbers);

// const arr = [4, 3, 1, 6, 7, 8, 2, 5]
// let temp = 0;

// arr.map((arr) => {
//     arr.forEach((item, index) => {
//         if (arr[index] < arr[index + 1]) {
//             temp = arr[index];
//         }

//     });
// })
// console.log("temp is: ", temp);

// const arr = [1, 10, 2];
// arr.sort((a, b) => a - b )
// console.log(arr);

// const arr = [, , ,,];

// console.log(arr.length);

//  const arr = [1, 2, 3, 4, 5];

// arr.pop();
//  arr.pop();
//  arr.push(4)
//  console.log(arr); // [1, 2, 3, 4]

// const arr = [1, 2, 3, 4, 4, 5, 5, 5, 2, 5];

// const newArr =new Set(arr)
// console.log(newArr); // [1, 2, 3, 4, 5]

// function add(a, b, c){}
// function secAdd(a,d, b=2, c)  {}
// console.log(add.length); // 3
// console.log(secAdd.length); // 2

// console.log([] === []);
// console.log([] == [])

// const sentence = "this is shahruk khan";

// const titleCased = sentence
//   .split(" ")                                     // Split sentence into words
//   .filter(word => word !== " ")                        // Remove extra spaces (optional)
//   .map(word => word[0].toUpperCase() + word.slice(1)) // Capitalize first letter
//   .join(" ");                                         // Join words back into a sentence

// console.log(titleCased); // Output: "This Is Shahruk Khan"

// console.log(typeof NaN); // number

// console.log(NaN===NaN); // false
// console.log(NaN == NaN); // false

// var a =10;  //output 11,11,12
// let a =10;  // output 11,11,12
// const a =10; // type error: Assignment to constant variable
// console.log(++a)
// console.log(a++)
// console.log(a)

// const arr = [2, 4, 4, 5, 5, 9, 3, 6, 7]
// arr.sort((a, b)=>a-b)
// const newArr=new Set(arr)

//  console.log(newArr)
//  console.log(arr)


//  const str= "navin is a engineer"
//  const newStr= str.split(" ")
//                   .map((items)=> items[0].toLocaleUpperCase()+ items.slice(1))
//                   .join(" ")
//  console.log(newStr) // ['navin', 'is', 'a', 'engineer']

// [,a,y] = [1, 2, 3, 4, 5];
// console.log(a); // 2

// a= 100;
//  b= a++ + ++a + a++ + ++a + a++ + ++a;
//  console.log(b);

// function waitTwoSeconds() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done waiting!");
//     },1000 );
//   });
// }

// async function myFunc() {
//   console.log("Start");
//   const result = await waitTwoSeconds(); // Yahan ruk jayega jab tak promise resolve nahi hota
//   console.log(result); // "Done waiting!" print hoga 2 second ke baad
//   console.log("End");
// }

// myFunc();

// console.log(typeof null); // "object"
// console.log(null === null); // true
// console.log(null == null); // true

// console.log(null === undefined); // false
// console.log(null == undefined); // true
// console.log(typeof  null)  //object
// console.log(typeof typeof undefined)

// class Person {
//   constructor(name) {
//     this.name = name;

//     // Arrow function binds `this` automatically
//     this.sayHello = () => {
//       console.log(`Hello, my name is ${this.name}`);
//     };
//   }
// }

// const p1 = new Person("Rahul");
// p1.sayHello(); // ✅ Output: Hello, my name is Rahul


// class mohan{
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;

//     this.sayHello= ()=> {
//         console.log(`Hello, my name is ${this.name}and his age: ${this.age}`);
//     };
// }
// }
//  const put1=new mohan('rahul', 25)
//  put1.sayHello()

// let abc= "rahul"


// function fn(){
//     let abc="rohan"
//     console.log(abc)

// }
// fn()


// // Class
// class Car {
//   constructor(brand) {
//     this.brand = brand; // Encapsulation
//   }

//   start() { // Polymorphism example
//     console.log(`${this.brand} is starting...`);
//   }
// }

// // Inheritance
// class ElectricCar extends Car {
//   charge() {
//     console.log(`${this.brand} is charging...`);
//   }
// }

// // Object
// const tesla = new ElectricCar("Tesla");
// tesla.start();   // Abstraction (you don’t see how it works inside)
// tesla.charge();


// const arr=["a", "b", "k", "r", "a"]
// console.log(arr.indexOf("a", 4))


// arr= [1,6,29,4,63]
// console.log(arr.sort())

// function sum(){
//     console.log('sum')
//     return 2+2;
// }
// let a=(4,6,3,4,2,56)
// console.log(a)

// function sayHi() {
//  return 100
// }

// var sayHi;    // This just refers to the function, does NOT run it
// // sayHi();

// console.log(sayHi)

// function sayHello() {
//   console.log("Hi!");
// }

// function callFunction(fn) {
//   fn(); // Calls the passed function
// }

// callFunction(sayHello);

// console.log(sayHello)

// 
// const fruits = ['apple', 'banana', 'apple', 'orange'];

// const count = fruits.reduce((acc, fruit) => {
//   acc[fruit] = (acc[fruit] || 0) + 1;
//   return acc;
// }, {});

// console.log(count)

// let arr= [1,2,3,4,5]
// console.log(arr.map(e=>{
//     if(e>0)return;
//     return e*10
// }))


// function add(){
//     console.log('add')
//     return 10+90;
// }
// function subtract(){
//     console.log('subtract')
//     return 110-100;
// }
// function devide(){
//     console.log('devide')
//     // return 10/110;
// }
// const a= (add(), subtract(),devide())
// const b= (10, 20, 30)
// console.log("a=",a)
// console.log(b)



// let numvalue= 2
// let a= !--numvalue
// let b= !--numvalue
// let c= !--numvalue
// console.log(a,b,c)

// console.log(+"555")
// console.log(+'adb')
// console.log(+555)

// let user = {
//   name: "Rahul",
//   address: {
//     city: "Mumbai",
//     pincode: 400001
//   }
// };

// let {
//   address: {city, pincode },
//   name
//     }
//  = user;

// console.log(city);    // Mumbai
// console.log(pincode); // 400001
// console.log(name); // 400001


// let arr= [10,20,30]
// let [a, b,c]= arr
// console.log(a)
// console.log(b)
// console.log(c)


// function add(a) {
//   return function(b) {
//     return a + b;
//   };
// }

// console.log(add(2)(3)); //5

// function add(a) {
//   const inner = (b) => {
//     a += b;
//     return inner;
//   };
//   inner.valueOf = () => a;
//   return inner;
// }

// console.log(+add(1)(2)(3)); // Output: 6

// function add(a) {
//   return function (b) {
//     if (b !== undefined) {
//       return add(a + b); // keep calling recursively
//     } else {
//       return a; // termination condition
//     }
//   };
// }

// console.log(add(2)(3)(4)(5)()); // Output: 14

// const p1 = new Promise(resolve => setTimeout(() => resolve("First"), 1000));
// const p2 = new Promise(resolve => setTimeout(() => resolve("Second"), 2000));
// const p3 = new Promise(resolve => setTimeout(() => resolve("Third"), 1500));

// Promise.all([p1, p2, p3])
//   .then(values => {
//     console.log(values);  // ["First", "Second", "Third"]
//   })
//   .catch(error => {
//     console.error("One promise failed:", error);
//   });


// const str= 'Navin Kumar Jha'

// // const str1= str.split(/(?=[A-Z])/)

// // console.log(str1.join(' '))

// const str1= str.split('').reverse()
// const str2=str1.join(' ')
// console.log(str2)

// arr= [1,2,3,4,[5,6],7,8,9]


// const newArr= JSON.parse(JSON.stringify(arr))

// newArr.pop()
// newArr.pop()
// console.log("new arr is",newArr, )
// console.log("arr is",arr)

// const original = {
//     name: "Ravi",
//     address: {
//         city: "Delhi"
//     }
// };
// console.log(JSON.stringify(original)); // {"name":"Ravi","address":{"city":"Delhi"}}
// // shallow coppy
// const shallowCoppy = { ...original }
// shallowCoppy.address.city = "mumbai"
// console.log(shallowCoppy.name)
// console.log(original.name)
// console.log(shallowCoppy.address.city) // "Delhi"
// console.log(original.address.city) // "Delhi"

//deep coppy
// Deep copy using JSON methods
// const deepCopy = JSON.parse(JSON.stringify(original));
// console.log(deepCopy);
// deepCopy.address.city = "Mumbai";

// console.log(original.address.city); // "Delhi" ✅ original safe hai


// const str = 'NavinIsAEngineerAndHeWillWorkWith'
// const newStr= str.split(/(?=[A-Z])/)
// const finalStr= newStr.join(' ')
// console.log(finalStr)

// const jsonString = '{"name": "Bob", "age": 40}';
// const obj = JSON.parse(jsonString, (key, value) => {
//   if (key === 'age') return value + 1;
//   return value;
// });

// console.log(obj.age); // Output: 41


// function stringToNumber(input) {
//     const num = Number(input)
//     return isNaN(num) ? "not a number" : num
// }
// console.log(stringToNumber("abc"))

// condition ? valueIfTrue : valueIfFalse
// function whatAmI(input) {
//     return !isNaN(input) ? "I'm not a String" : "I'm a string!"
// }
// console.log(whatAmI(123))
// '{"name": "Amit", "joined": "2023-08-01T12:00:00Z"}
// const str = '{ "name": "Navin", " age": "22" }'
// const newStr = JSON.parse(str, (key, value) => {
//     console.log(`Key: ${key}, Value: ${value}`);
// })

// let arr = [[1, 2], [3, 4], [5, 6], [7, 4]]
// // const newArr= arr.flat()
// // console.log(newArr);


// function flatArr(arr, n) {
//     if (n === 0) return arr;

//         const finalArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'Number') {
//             finalArr.push(arr[i])
//         }
//          else {
//             finalArr.push(...flatArr(arr[i], n - 1))
//         }
//     }
//     return finalArr;
// }

// const array = flatArr(arr, 1)
// console.log(array)


// const arr = ['e', 'a', 'c', 'r', 'f', 'a'];
// const finalArr = [...new Set(arr)].sort();

// console.log(finalArr);


// function multiply(a) {
//     return function (b) {
//         if (b !== undefined) {
//             return multiply(a * b);
//         }
//         return a;
//     };
// }

// console.log(multiply(2)(3)(4)()); // 24


// const arr= [1,2,3,4,5]

// const finalArr= arr.map(e => e > 3)
// console.log(finalArr)//[ false, false, false, true, true ]

// console.log("shivam"-100)