const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const connect = require("./connection/connect")
const postRoutes = require("./routes/postRoutes");



app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());;

app.use("/api/v1/emailformpost",postRoutes)

app.listen(8080, ()=>console.log('app is running on port 8000'))
