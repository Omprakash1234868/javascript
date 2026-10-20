function sayMyName(){
    console.log("o");
    console.log("m");
    console.log("p");
    console.log("r");
    console.log("a");
    console.log("k");
    console.log("a");
    console.log("s");
    console.log("h");
}
// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
// addTwoNumbers(3,"4");


function addTwoNumbers(number1, number2){
    let result = number1+ number2
    return result
}

const result = addTwoNumbers(3,5)
// console.log("Result:", result);


function loginUserMessage(username){
    return `${username} just looged in`
}

// console.log(loginUserMessage("kanhaya"));
// console.log(loginUserMessage(""));
// console.log(loginUserMessage());


function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200,500,600,2000));


const user = {
    username: "omprakash",
    price: 199
}

function handleobject(anyobject){
  console.log(`Username is $ {anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user);


const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));