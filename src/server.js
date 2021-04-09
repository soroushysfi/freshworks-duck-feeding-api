const app = require('./app')
// setting port based on the environment
// if on development set on 3000
const port = process.env.PORT || 3000

// run the server on the specified port
app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})