require('dotenv').config()
const port = process.env.PORT
const app = require('./app')

app.listen(port, () => {
    console.log(`Fruit API is listening on port ${port}`)
})