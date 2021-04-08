const express = require('express')
const cors = require('cors')
require('./db/mongoose')
const DuckFeedingRouter = require('./routes/duck-feeding-router')


const app = express()

app.use(cors());
app.use(express.json());

app.use('/api', DuckFeedingRouter);


module.exports = app