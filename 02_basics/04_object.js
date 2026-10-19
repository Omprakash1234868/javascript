// const tinderUser = new Object()

const tinderUser = {}
tinderUser.id = "1234abc"
tinderUser.name = "omprakash"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "ompr9648@gmail.com",
    fullname:{
        userfullname:{
        username:"omprakash",
        lastname:"Kumar"
    }
  } 
}


// console.log(regularUser.fullname.userfullname);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1 , obj2}

const obj3 = {...obj1 , ...obj2}
// console.log(obj3);


const users = [
    {
        id:1, 
        email:"ompr@gmail.com"
    },

    {
        id:1, 
        email:"ompr@gmail.com"
    },

    {
        id:1, 
        email:"ompr@gmail.com"
    },

    {
        id:1, 
        email:"ompr@gmail.com"
    }
]

users[1].email
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));


const course = {
    coursename: "js in hindi",
    price: "9999",
    courseInstructor: "omprakash"
}

const {courseInstructor} = course

console.log(courseInstructor);


