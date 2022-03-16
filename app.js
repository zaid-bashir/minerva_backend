//All Imports Goes Here...
//========================

const express = require('express');
const mongoose = require('mongoose');
const playlistRoute = require('./api/routes/playlist');
const bodyParser = require('body-parser');
const cors = require('cors');


//MongoDB Connection Code
//=======================

mongoose.connect("mongodb+srv://minerva:minerva@minerva-cluster.iieci.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");

//MongoDB DB Connection Check
//===========================

mongoose.connection.on('error', err => {
    console.log("Connection Failed, Please Try Again...");
});
mongoose.connection.on('connected', connected => {
    console.log("Connection Successful with MongoDB...");
});


const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());



app.use('/playlist', playlistRoute);

app.use('/',(request,response)=> {
    response.send("<br><br><center><h1>Welcome to Rest API created By Zaid Bashir</h1></center><br><br><body style=\"background-color:white\"><center><h2>Flutter Engineer Test by Minerva Trusted Communications</h2></center></body>");
});

// app.use((request, response, next) => {
//     response.status(404).json({
//         errorMessage: "Bad Request 404. The Resource you Want To Fetch is Not Availiable on Server"
//     });
// });

module.exports = app;