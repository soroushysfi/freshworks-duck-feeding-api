const express = require('express')
require('./db/mongoose')


const app = express()



const port = process.env.PORT || 3000

const DuckFeedingRouter = require('./routes/duck-feeding-router')

app.use(express.json());

app.use('/api', DuckFeedingRouter);


app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})