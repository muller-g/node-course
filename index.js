const express = require('express')
const app = express()
const mysql = require('mysql')

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "123456",
    database: "api_database",
})

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: 'Hello World'})
})

app.get('/id', (req, res) => {
    res.json(25 * 25)
})

app.listen(3000)