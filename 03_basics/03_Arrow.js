const user = {
    username: "omprakash",
    price: 999,
    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
      
}
// user.welcomeMessage()
// user.username = "krishna"
// user.welcomeMessage();

// console.log(this);


function one(){
    // console.log(this);

    let username = "Ram"
    // console.log(this.username);
}
 one()



//  const chai = function () {
//     let username = "omprakash"
//     console.log(this.username);
//  }

//  chai()


// +++++ Arrow function +++++++

const chai = () => {
    let username = "omprakash"
    console.log(this);
}

chai();



//  basics syntax in Arrow function    
const addTwo = (num1, num2) =>{
    return num1 + num2
}

console.log(addTwo(3,4))