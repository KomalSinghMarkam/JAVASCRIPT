
//******************** CONVERSION***************
let score =true
console.log(typeof score);

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);

// when you try to convert number "33" => 33
// "33abs" =>NaN
// true => 1;  false => 0

let isLoggedIn = ""
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false for empty String
// "komal" => true
let num = 33
let str = String(num)
console.log(str);
console.log(typeof str);


//********************OPERATIONS**************** 

let value =3
let negValue = -value
console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "komal"

let str3 = str1 + str2
console.log(str3);


console.log("1" + 3);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3 +4 ) * 5 % 3);
console.log(+true);
console.log(+"");





