const express = require('express')
const app = express()
//
const db = require('./db')
//middleware
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const cors = require("cors")
//router
const monster = require('./router/monster')

app.use(bodyParser.json());
app.use(cookieParser());

var corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));



app.use('/monster', monster)


app.get('/', function (req, res) {
    res.send('Monster micro services')
})

app.listen(3001, () => {
    console.log("app started");
})