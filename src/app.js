const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const DuckFeedingRouter = require('./routes/duck-feeding-router')

// using express to create the app
const app = express()
// allow cors requests
app.use(cors());
// allow send json objects for post 
// requests
app.use(express.json());

// adding the routes file to 
// the web server
app.use('/api', DuckFeedingRouter);


module.exports = app