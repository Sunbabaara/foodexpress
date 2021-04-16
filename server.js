const express= require("express");
const dotenv =require("dotenv");
const morgan = require("morgan");
const connectDB= require("./config/connectDB");
const foodRoute =require("./routes/foodRoute");
//const usersRoute =require("./routes/usersRoutes");


dotenv.config();

const app = express();

connectDB();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes
app.use("/api/v2/food", foodRoute)
//app.use("/api/v1/users", usersRoute)

//home 
app.get ("/", (req, res)=> {
    res.send("<h1>welcome</h1>");

})

const port =process.env.PORT || 6000

app.listen(port, ()=>
console.log (`server is running ${port}`))