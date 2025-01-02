const accountId =12346
let accountEmail = "komal@gmail.com"
var accountPassword ="123456"
accountCity = "Raipur"
let accountState;

// accountId = 2  //not allowed

accountEmail = "komalsingh@gmail.com"
accountPassword ="1234"
accountCity = "surajpur"
console.log(accountId);

/*
prefer not to use var 
because of the issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
