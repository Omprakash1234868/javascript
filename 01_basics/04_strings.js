const name = "omprakash"
const repoCount = 50

console.log(`Hello my name is ${name} and my repo Count is  ${repoCount}`);


const gameName = new String("omprakash")
console.log(gameName[5]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('k'));


const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);


const newStringOne = "   omprakash   "
console.log(newStringOne);
console.log(newStringOne.trim());