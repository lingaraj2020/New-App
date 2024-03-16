//write basic express boilerplate code,
//with express.json() middleware
//https://shorturl.at/adHUW

const express=require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors=require("cors");
const app=express();
const port=3000;

app.use(express.json());
app.use(cors({
    Origin: "http://localhost:5173"
}));
 
app.post("/todo",async function(req,res){
 const createPayload=req.body;
 const parsedPayload=createTodo.safeParse(createPayload);
 if(!parsedPayload.success){
    res.status(411).json({
        msg:"you sent the wrong inputs",
    })
    return;
 }
 //put it on mongoDB
 await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completd:false
 })

 res.json({
    msg:"Todo created "
 })
})

app.get("/todos",async function(req,res){
    const todos=await todo.find({});

    res.json({
        todos
    })

})

app.put("/completed",async function(req,res){
    const updatePayload=req.body;
    const parsedPayload=updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg:"you sent the wrong input",
        })
        return;
    }
    await todo.update({
        _id:req.body.id
    },{
        completd:true
    })
    res.json({
        msg:"Todo marked as completed"
    })
})

app.listen(port,()=>{
    console.log(`your app is running on port ${port}`)
})