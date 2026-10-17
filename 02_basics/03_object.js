// construction se banta hai to singlrton hota hai 

// object literals

const mySym = Symbol("key")
const Jsuser = {
    name: "omprakash",
    "full name": "Abhay",
    [mySym]: "mykey1",
    age: 22,
    location:"chhattisgarh",
    email: "ompr5854@gamil.com",
    isLonggedIn: false,
    lastLoginDays: ["monday","saturday"]
}

// console.log(Jsuser.name);
// console.log(Jsuser["name"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser[mySym]);


Jsuser.email = "ompr@chatgpt.com"
// Object.freeze(Jsuser)
Jsuser.email = "ompr@microsoft.com"
// console.log(Jsuser);


Jsuser.greeting = function(){
    console.log("hello js user");
}
Jsuser.greetingTwo = function(){
    console.log(`hello js user,${this.name}`);
}

console.log(Jsuser.greeting());
console.log(Jsuser.greetingTwo());

