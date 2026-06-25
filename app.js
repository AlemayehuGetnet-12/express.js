const express  = require("express");
const app = express();
app.get('/',(req,res)=>{
    res.send('<p>This is Express Test</p>')
});
app.get('/blog1',(req,res)=>{
    res.sendFile('./blog1.html',{root:__dirname})
});
app.get('/blog2',(req,res)=>{
    res.sendFile('./blog2.html',{root:__dirname})
});
app.get('/blog3',(req,res)=>{
    res.sendFile('./blog3.html',{root:__dirname})
});
app.get('/blog4',(req,res)=>{
res.redirect('./blog3')
});
app.use((req,res)=> {
    res.sendFile('./404.html',{root:__dirname})
})
app.listen(7777);