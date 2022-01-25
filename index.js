import bodyParser from "body-parser";
import  Mongoose from "mongoose";
import express  from "Express";
import cors from "cors";
import work from "./routes/work.js"
const app = express();
app.use(bodyParser.json({limit: "30mb",extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb" , extended : true}));
app.use(cors());
app.use('/work',work)
const CONNECTION_URL = "mongodb+srv://sandhya:Sandhya@cluster0.trov7.mongodb.net/mySecondDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;
Mongoose.connect(CONNECTION_URL)


.then(()=>app.listen(PORT,()=>console.log(`server running on :${PORT}`)))
.catch((error)=>console.log(error.message));