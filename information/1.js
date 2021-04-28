const fs = require('fs')
let arr = [];
let a1 = {
    username:"111111",
    password:"111111"
}
arr.push(a1);
let j = JSON.stringify(arr)
fs.writeFile('users.json',j,error=>{
    console.log('finish')
})