import work from "../models/work.js";
import Mongoose from "mongoose";


export const getworks = async(req,res)=>{
    try{
        const data = await work.find();
        res.status(200).json(data);
    }catch(error){
        res.status(404).json(console.log({message:error.message}));
    }
};
export const createworks = async(req,res) => {
    const data = req.body;
    const newwork = new work(data)
      try{
          await newwork.save();
        res.status(200).json(newwork);
      }catch(error){
          res.status(404).json(console.log({message:error.message}));
      }
    };

    export const updateworks = async(req,res)=>{
        const id  = req.params.id;
        const data = req.body;
       if(!Mongoose.Types.ObjectId.isValid(id)){
       return res.status(404).json(console.log("There is no work with that id"));
       }
       else{
           const updatedwork = await work.findByIdAndUpdate(id,{...data,id});
           return res.status(200).json(updatedwork)
       }
    };

    export const deleteworks= async(req,res)=>{
        const id  = req.params.id;
        if(!Mongoose.Types.ObjectId.isValid(id)){
            return res.status(404).json(console.log("There is no work with that id"));
        }else{
            const deletework =  await work.findByIdAndRemove(id)
            return res.status(200).json(console.log("Ther work is deleted successfully"));
        }
    }

