// let computer = { cpu: 17 }
// let lenovo = {
//     screen: "HD",
//     __proto__: computer
// }
// let tomHardware = {}

// console.log("lenovo:", lenovo.__proto__)

let ganericCar = {tayer: 4}
let tesla = {
    driver: "autoPilot"
}

Object.setPrototypeOf(tesla, ganericCar)


console.log("tesla:", tesla)
console.log("tesla tayer:", tesla.tayer)