import Mongoose from "mongoose";

const SRSchema = Mongoose.Schema({
    Day : String,
    Date  : String,
    Title : String,
    Description : String,
    Deadline :String,
    
});

const SRWorks = Mongoose.model("SRWorks",SRSchema);
export default SRWorks;