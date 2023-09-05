const express = require("express"); // express
const app = express();
const mongoose = require("mongoose"); //mongoose
const morgan = require("morgan");   //morgan 
const port = process.env.SERVER_PORT || 8002; //get port number
const userRouter = require("./routes/user");
const postRouter = require("./routes/post");

//middleware
app.use(express.json());
app.use(morgan("dev")); ///morgan
app.use("/user", userRouter);  //url
app.use("/post", postRouter);

//connect server
app.listen(port, (req, rec) => {
  console.log("The Server has been created " + port);
});
//connect Data Base => Port + then(sucess()=>{}) .catch(error=>{})
mongoose.connect("mongodb://127.0.0.1:27017/Node_JS").then(() => {
    console.log("DataBase Connected");
}).catch((err) => {
    console.log("The Error " + err);
  });
