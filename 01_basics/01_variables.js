const accountId = 89656
let accountEmail = "alataf@google.com"
var accountPassword = "123456"

let accountState

accountCity = "Patna"

// accountId = 56; // Not Allowed

accountEmail = "alataf25@google.com"
accountPassword = "58924"
accountCity = "Delhi"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

//Another way to use console.log method
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
