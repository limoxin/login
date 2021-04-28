const http = require('http');
const path = require('path');
const fs = require('fs');
const queryString = require('querystring');
//set port
const port = 5555;

//create server and listening
http.createServer((request,response)=>{
    let e = false;
    request.on('data',postData=>{
        let users = [];
        let u = fs.readFileSync('../information/users.json');
        users = JSON.parse(u);
        let newUser = queryString.parse(postData.toString());
        // console.log(postData);
        // console.log(newUser);
        console.log(users);
        let exist = users.some(item=>{
            console.log(item);
            if(item.username === newUser.username){
                console.log('yes')
                return item.password === newUser.password;
            }else{
                return false;
            }
        })
        console.log(exist)
        if(exist){
            let url = request.url;
            if(url === '/'){
                let homePath = path.join(__dirname,'../','html','home.html');
                let data = fs.readFileSync(homePath);
                response.end(data)
            }else if(url==='/css/home.css'){
                let homeCssPath = path.join(__dirname,'../','css','home.css');
                let cssData = fs.readFileSync(homeCssPath);
                response.end(cssData);
            }else if(url ==='/css/nav.css'){
                let navCssPath = path.join(__dirname,'../','css','nav.css');
                let cssData = fs.readFileSync(navCssPath);
                response.end(cssData);
            }else if(url === '/js/shareWithAnimation.js'){
                let shareWithAnimation = path.join(__dirname,'../','js','shareWithAnimation.js');
                let jsData = fs.readFileSync(shareWithAnimation);
                response.end(jsData);
            }
            
        }else{

            response.setHeader('Content-Type','text/html;charset=utf-8');
            response.end('用户名或密码错误');
        }
    })
    let url = request.url;
    if(url==='/css/home.css'){
        let homeCssPath = path.join(__dirname,'../','css','home.css');
        let cssData = fs.readFileSync(homeCssPath);
        response.end(cssData);
    }else if(url ==='/css/nav.css'){
        let navCssPath = path.join(__dirname,'../','css','nav.css');
        let cssData = fs.readFileSync(navCssPath);
        response.end(cssData);
    }else if(url === '/js/shareWithAnimation.js'){
        let shareWithAnimation = path.join(__dirname,'../','js','shareWithAnimation.js');
        let jsData = fs.readFileSync(shareWithAnimation);
        response.end(jsData);
    }
   


    
}).listen(port,error=>{
    console.log(`WebServer is listening at port ${port}`);
})