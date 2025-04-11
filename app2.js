const express=require("express");
const app=express();



const userModel=require("./usermodel")



app.get('/',(req,res)=>{
    res.send("hey")
})

app.get('/create',async(req,res)=>{
    let create= await userModel.create({
        name: "kartikey",
        email: "kartikey@gmail.com",
        username:"kartikey0104"
    })
    res.send(create)
})


app.get('/read',async(req,res)=>{
    let read=await userModel.find({username:"kartikey0104"})
    res.send(read)
})


app.get('/update',async(req,res)=>{
    let update=await userModel.findOneAndUpdate({username:"kartikey0104"},{name:"Jhanvi"},{new:true})
    res.send(update)
})



app.get('/delete',async(req,res)=>{
    let user =await userModel.findOneAndDelete({name:"kartikey"})
    res.send(user)
})

app.listen(3000)
