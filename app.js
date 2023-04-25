const express = require('express')
const app = express()
//
const db = require('./db')
//middleware
const bodyParser = require('body-parser')
const cookieParser = require("cookie-parser")
const cors = require("cors")
//router
const monster = require('./router/monsterInfo')
const capture = require('./router/capture')

app.use(bodyParser.json());
app.use(cookieParser());

var corsOptions = {
    origin: '*',
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));



app.use('/monsterinfo', monster)
app.use('/capture', capture)



app.get('/', function (req, res) {
    res.send('MonsterInfo micro services')
})

app.listen(3001, () => {
    console.log("app started");
})