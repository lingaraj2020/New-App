{/*
    Todo{
        title:string;
        description:string;
        completed:boolean
    }
*/}
const mongoose=require("mongoose");
//mongodb url handy
//mongodb+srv://raj2020:hfMO3Jmf8Kgiayft@cluster0.yhlsrrr.mongodb.net/todos

mongoose.connect("mongodb+srv://raj2020:hfMO3Jmf8Kgiayft@cluster0.yhlsrrr.mongodb.net/todos")
const todoschema= mongoose.schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo= mongoose.model('todos',todoschema);

module.exports={
    todo
}
