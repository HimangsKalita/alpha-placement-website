const express = require("express");
const app = express();
const cookieParser= require("cookie-parser")
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload")

const errorMiddleware=require("./middleware/error")

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended:true}));
app.use(fileUpload());

const job= require("./routes/jobRoute");
const user = require("./routes/userRoute");
const apply = require("./routes/appliedJobRoute");
app.use("/api/v1",job);
app.use("/api/v1",user);
app.use("/api/v1",apply);

app.use(errorMiddleware);


module.exports = app;