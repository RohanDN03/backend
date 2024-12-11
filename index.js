// const express=require("express");
// const app=express();
// const todo=[];
// app.use(express.json())
// app.post('/signin',(req,res)=>{
//     const name = req.body.name;
//     const password = req.body.password;
//     const userexit=todo.find((user)=>user.name===name);

//    if(!userexit){
//     todo.push({name,password});
//     console.log(name,password);
//     res.json({
//         msg:"You are signin",
//         user:{name,password}
//     })}else{
//         res.json({
//             msg:"you alredy exits"
//         })
//     }

// }
// )
// app.put('/sigin',(req,res)=>{
    
// })


// app.listen(8000,()=>{
//     console.log("the server is running");
// });


// const express=require("express");
// const app=express();
// app.use(express.json());
// const todo=[];

// app.post('/signin',(req,res)=>{
//     const user=req.body.user;
//     if(!Array.isArray(user)){

//     }
//     user.foreach(({name,password})=>{
//     const exist=todo.find((user)=>user.name===name && user.password===password)

//     if(!exist){
//         todo.push({name,password});
//         console.log(name,password);
//         res.json({
//             msg:"You are signin",
//             user:name,password
//         })
//     }
//     else{
//         res.json({
//             msg:"You alerady exist"
//         })
//     }
// })
// })

// app.listen(3000);


// Attendence

const express=require("express");
const app=express();
app.use(express.json());
const todo=[];


app.post('/mess',(req,res)=>{
  const user=req.body.user;
  if(!Array.isArray(user)){
    console.log("Please create array");
  }
  user.foreach(({name,rollno})=>{
  const exist=todo.find((user)=>user.name===name && user.rollno===rollno)

  if(!exist){
    todo.push({name,rollno});
    console.log(name,rollno);
    res.json({
        msg:"You are added",
        user:{name,rollno}
    })
  }else{
    res.json({
        msg:"You are already eat food"

    })
  }
  })
})

app.listen(3000);