const fs = require('fs');
const http = require('http');
const querystring = require('querystring');
http.createServer((request,response)=>{
    if(request.url.startsWith('/favicon.ico')) return;
    let query = request.url;
    let u = query.split('?')[1];
    let user = querystring.parse(u);
    let usersJson = fs.readFileSync('../information/users.json');
    let users = JSON.parse(usersJson);
    let exist = users.some(item=>{
        return item.username === user.username;
        
    })
    if(exist){
        response.setHeader('Content-Type','text/html;charset=utf-8')
        response.end('用户名已存在');
       
    }else{
        if(user!={}){
            users.push(user);
            fs.writeFileSync('../information/users.json',JSON.stringify(users));
            response.setHeader('Content-Type','text/html;charset=utf-8')
            response.end('注册成功'); 
        }
    }

   
}).listen(8080,err=>{
    if(err){
        console.log(err)
    }
    console.log('RegisterServer is running')
})