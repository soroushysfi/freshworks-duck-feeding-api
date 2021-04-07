const express = require('express')
require('./db/mongoose')
const DuckFeedingRouter = require('./routes/duck-feeding-router')


const app = express()


app.use(express.json());

app.use('/api', DuckFeedingRouter);


module.exports = app