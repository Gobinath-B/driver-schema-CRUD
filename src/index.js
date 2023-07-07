const express = require("express");
const mongoose = require("mongoose");
const app = express();
const DriverModel = require('./models/schema.js')
const Port = process.env.PORT || 3000;

mongoose.connect('mongodb://127.0.0.1:27017/driver')

app.use(express.json());


//add driver into the db

app.post("/add", async (req,res)=>{

   try{
         const driver = await DriverModel.create(req.body);
         
         res.json(driver);
   }
   catch(err){
      console.log(err);
      res.status(500).json({error: "Internal Server"});
   }

})

//get all the driver data

app.get("/drivers",async (req,res)=>{
    try{

        const driver = await DriverModel.find();
        res.json(driver);
    }
    catch(err){
        console.log(err);
    }
})

//get individual driver by id

app.get("/drivers/:id",async(req,res)=>{

    const {id} = req.params;
    try{
    const driver = await DriverModel.findById(id);
     res.status(200).json(driver);
    }
    catch(err){
        console.log(err);
    }

})

//update the driver data by id

app.put("/update/:id",async(req,res)=>{

    const { id } = req.params;
    const { upd } = req.body;
    
    try {
      const driver = await DriverModel.findByIdAndUpdate(id, req.body);
      
      if (!driver) {
        console.log("Not updated the " + id);
        res.status(404).json({ error: "driver not found" });
      } else {
        const driver = await DriverModel.findById(id);
        res.status(200).json(driver);
        
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: "Internal server error" });
    }
    
})  

//delete the driver document by id

app.post("/delete/:id",async(req,res)=>{

        const { id } = req.params;
       
        
        try {
            const driver = await DriverModel.deleteOne({ _id: id });
        
          if (!driver) {
            console.log(id + "Driver not found");
            res.status(404).json({ error: "driver not found" });
          } else {
            const driver = await DriverModel.deleteOne({ _id: id });
            res.status(200).json({"result":"Driver Deleted",driver});
            }
        } catch (err) {
          console.log(err);
          res.status(500).json({ error: "Internal server error" });
        }


})

app.listen(Port,()=>{
    console.log(`running on ${Port}`);
})