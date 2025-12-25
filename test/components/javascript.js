// Functional components(using hooks) and Class components(using lifecycle methods)
// .Understanding the differences and when to use each is crucial.

// Summary Table
// Keyword / Type	
// Hoisted ? 
// Value Before Initialization Function Declaration	✅ Yes	
// Full function available var	✅ Yes	undefined
// let / const	✅ Yes	Error (TDZ - Temporal Dead Zone)

// operators
// there have two operator 
// rest operator, spreed operator
// The spread operator is used when you want to copy, merge, or pass elements individually.
// The rest operator is used when you want to bundle multiple elements into one array or object.

// const arr= ["a", "b", 2, "c", "mohan", 33];

// const str=[];
// const char=[];
// const num=[];
// arr.forEach((e)=>{
//     if(typeof e==="string"){
//         if(e.length>1){
//             str.push(e);
//         }else {
//             char.push(e);
//         }
//     }else{
//         num.push(e);
//     }
// })
// console.log(str);
// console.log(char);
// console.log(num);

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.filter((e) => e = 4)
// console.log(newArr);


// How the Event Loop Works

// Call Stack – The chef’s workbench(where code is executed one line at a time).

// Callback Queue – The waiting area where new orders(events / callbacks) line up.

// Event Loop – The waiter that keeps checking if the chef’s bench(call stack) is empty.

// If empty ➝ takes the next order from the waiting area(queue) ➝ gives it to the chef(call stack).

// If not empty ➝ waits until chef finishes.