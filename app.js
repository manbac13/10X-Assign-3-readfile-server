const fs = require("fs");
const http = require("http");

content = "<h1> Hello World </h1>\n<p> This is Manish...</p>";

fs.writeFile("index.html", content, (err)=>{
    console.log(err);
});

const server = http.createServer((req, res)=>{
    fs.readFile("index.html" , (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.end(data)
        }
    })
})
server.listen(5000, ()=>{
    console.log("Server is up at port 5000");
})