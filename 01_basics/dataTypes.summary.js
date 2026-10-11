// primitive data Types

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3;

// const isLoggedIn = false;
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);


// const bigNumber = 324784588554521n
// console.log(bigNumber)




// Reference (Non primitive)
//  Array, object, function




// const heros = ["shaktiman", "naagraj","doga"];
// let myObj = {
//     name : "omprakash",
//     age : 22,
// }
// const myFunction = function(){
//     console.log("hello world");
// }

// console.log(typeof heros);







// ********************************Stack and Heap memory *******************************
// stack(primitive) , Heap(Non- primitive)

let myname = "omprakash"
let anothername = myname
anothername = "chaiaurcode"

console.log(myname)
console.log(anothername);


let userOne = {
    email:"user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "omprakash@google.com"

console.log(userOne.email);
console.log(userTwo.email);