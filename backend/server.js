const express = require('express')
const { json } = require('express/lib/response')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))


app.listen(port, ()=>{console.log(`Server started on ${port}`)})


