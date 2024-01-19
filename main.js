const express = require('express');
const mongoose = require('mongoose');
const studRoute = require('./studroutes');
const feeRoute = require('./feeRoutes');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connecting with mongoose
const connect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/School").then(() => { console.log("connected") });
    }
    catch (error) { throw error }
}
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected");
})

app.use("/student",studRoute);
app.use("/fees",feeRoute);

app.listen(3000, (res, req) => {
    connect();
    console.log("server started");
});
