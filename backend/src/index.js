const express = require('express')

const cors = require('cors')

const dotenv = require('dotenv')

const route = require('./route/route.js')

const bodyParser = require('body-parser');



const app = express()//initalize express server
app.use(cors())

dotenv.config()//initialize env

app.use(bodyParser.json())


app.use('/', route)

const Port = process.env.Port || 8000

app.listen(Port, () => { console.log(`Express app running on port ${Port}`) })