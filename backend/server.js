const express = require("express"),
	bodyParser = require("body-parser"),
	uppy = require('uppy-server')


if(process.env.NODE_ENV == 'development'){
	require('dotenv').config();
}

// connect to the database
const connectToDB = require("./db_config.js").connectToDB
connectToDB("test_project")

// runs express app and sets defined port
var app = express()
const PORT = process.env.PORT || 3000 
// app.set("port", PORT)

// middleware, transforms http request so that you can use req.body json format 
// for accepting json data from http requests
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


// import sub routers for CRUD api
let router = require("./api_features/router.js")

app.all('*', function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
	res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    next()
});

// base router for CRUD api
app.use("/", router)

// starts the app listening for requests
app.listen(PORT, function () {
	console.log(
		"\n\n===== listening for requests on port " + PORT + " =====\n\n"
	)
})

// To enable Uppy Socket for realtime upload progress, you can call the socket method like so:
// var server = app.listen(PORT)

// uppy.socket(server, options)


