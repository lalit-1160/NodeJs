const express = require("express");
// importing express moule
const app = express();

const path = require("path");

const Product = require("./Product");

// -----------------------------------------------
// middleware json
app.use(express.json());
// body parser
app.use(express.urlencoded({extended:true}));
// -----------------------------------------------

// http = createServer((req,res)=>{}) == express();

// single thread in nodejs . It is single thread language

// endpoints:- get , put ,  post , update ,  delete , all , fetch


// res.send , res.end

// status code = 200 all good, 404 error

app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.send("Hello");
})

// app.get("/style.css",(req,res)=>{
//     res.sendFile(path.join(__dirname,"./public/style.css"))
// })


// does'nt work on /about
// work on /about/n   where n can be 0,1,3,43........
// app.get("/about/:x/:pages",(req,res)=>{
//     // res.send("Welcome to about page");
//     // res.sendFile(path.join(__dirname,"./public/aboutus.html"));

//     res.send("Request: recieved x = "+req.params.x+"Recieved pages = "+req.params.pages);
    
// })

// ==========================================================

// query String

// query limit = 2kb , it will not give error if data is more than 2kb but it will submit first 2kb data

// http://localhost:3000/about?name=%22lalit%22&age=22
app.get("/about",(req,res)=>{
    res.send("About page"+req.query.name+"  "+req.query.age);
})

// =========================================================
// accepting data

// method get
app.get("/sendData",(req,res)=>{
    console.log(req.query);
    res.send("Data Sended");
})

app.post("/sendData",(req,res)=>{
    const {username,password} = req.body;
    // console.log(req.body);
    console.log(username+" "+password);
    res.send("Data Sended");
})

app.post("/jsonData",(req,res)=>{
    // res.json({"name":"Lalit"})
    const id = parseInt(req.body.id);
 
    if(id<Product.length && id>=0)
    {
     res.json(Product[id]);
    }else{
        res.send("Index out of Bound ... Bhag ja Bsdk")
    }
})


app.all("*",(req,res)=>{
    // res.send("Page not found")
    res.status(404).send("Error in url");
})
const port = 3000;
app.listen(port,(err)=>{
    if(err){
        console.log("Error in starting server"+err);
    }
    else{
        console.log("Server Started successfully");
    }
})