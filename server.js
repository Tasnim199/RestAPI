console.clear()
//importation 
const express=require("express")
const mongoose=require("mongoose")
const Movie =require("./models/movie.js")
const movieRoute=require("./Routes/movieRoutes.js")
const cors = require('cors')
//assign
const app=express();
require ("dotenv").config();
const PORT=process.env.PORT;

//connect DB
mongoose 
.connect(process.env.DB_URL)
.then(()=> console.log("DB connected "))
.catch((err)=> console.log("error from DB ", err));

//middleware
app.use(express.json());
app.use("/movie",movieRoute)
app.use(cors())
// simple POST method for testin 

//app.post("/many", async(req,res)=>{
   // try{
     // const manyData= await Movie.insertMany(req.body)
    //  res.status(200).send({msg:"all data added ",manyData})
   // } catch(error){
  //      res.status(500).send({msg:"invalid request",error});
  //  }//
//

//end testing post method 

//lancement serveur 
app.listen(PORT,(err)=>{
    if (err) throw err;
    console.log(`server is running successfully on http://localhost:${PORT}`);
})