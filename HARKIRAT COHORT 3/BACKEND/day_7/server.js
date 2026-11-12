const http = require("http");
const path = require('path');
const fs =  require('fs')


const port = 3000;

const server = http.createServer((req,res)=>{
    const filepath = path.join(__dirname,req.url === '/'?"index.html":req.url);

const extname  =  String(path.extname(filepath).toLowerCase())
const mimetypes = {
    '.html' : 'text/html',
    '.css' : 'text/css',
    '.js' : 'text/javascript'
}
const conetentType = mimetypes[extname] || 'application/octet-stream '

fs.readFileSync(filepath , (err,content)=>{
    if(err){
       if(err.code === "ENOENT"){
        res.writeHead(404,{'content-type':text-html})
        res.end("404:File not found BROooooooo")
       }

    }else{
 res.writeHead(200,{'conetent-Type': conetentType});
 res.end(content,'utf-8')
    }

})
})

server.listen(port,()=>{
    console.log("Im listing on 3000")
})