const login = require("./fun");
login("hello");

const path = require("path");
console.log(path);

const data = path.parse(__filename);
console.log(data);

const fs = require("fs");

fs.readFile("./demo.txt","utf-8",function(err,data){
    if(err)
    {
        console.log(err);
    }
    else{
        console.log(data);
    }
})

console.log("Welcome to node");