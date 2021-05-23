const express = require("express")
 const logger = require("./public/css/middelwear/logger")
const app =express()

app.get ("/home", logger,(req,res)=>{
    
    res.sendFile(__dirname+"/public/index.html")
})

app.get ("/services", logger,(req,res)=>{
    
    res.sendFile(__dirname+"/public/services.html")
})

app.get ("/contact", logger,(req,res)=>{
    
    res.sendFile(__dirname +"/public/contact.html")
})
app.get ("/css/style.css",(req,res)=>{
    res.sendFile(__dirname +"/public/css/style.css")
})

const port = 4000;
app.listen(port,err=>{
  err? console.log(err):console.log(`server is runing on port ${port}`)
} )