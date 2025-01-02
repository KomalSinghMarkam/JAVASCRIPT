// primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, bigint 

const score = 100
const scorevalue = 100.3
const isLogedIn = false
const outsidetemp = null
let userEmail;


const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id == anotherId);

const bigNumber = 848984394384n

// reference (Non primitive)

// Array, Objects, functions

const heros = ["shatiman","naagraj","doga"]
let myob = {
    name:"komal",
    age: 21,
}
console.log(myob);


const myfunction = function(){
    console.log("hello world");
    
}
console.log(typeof bigNumber)
console.log(typeof myfunction)
console.log(typeof myob)
console.log(heros)
console.log(id)
myfunction()

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@~~~~~~~~~~~~~~~~~~~~~

// stack (primitive), Heap (Non-primitive)

let myYoutubename = "vikki"
let anothername = myYoutubename
anothername = "komalsingh"

console.log(myYoutubename);
console.log(anothername);
  
let userOne = {
    email: "komal@gmail.com",
    upi: 123456768
}

let userTwo = userOne

userTwo.email = "google@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);
