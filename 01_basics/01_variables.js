const accountId = 1434343
let accountEmail = "vedantpandey434@gmail.com"
let accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2 //not allowed

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
accountEmail = "vp@vp.com"
accountPassword = "212132342"
accountCity = "Visnagar"

// console.log(accountEmail);
// console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])