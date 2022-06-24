# Commands to start development node server
```
npm init -y

```
# Packages necessary 
```
npm install express nodemon mongoose

```
# Create script nodemon on package.json
```
"start": "nodemon ./index.js localhost 3000"
```
# Create index.js (or another name)

# Initial configuration
```
const express = require('express')
const app = express()

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

app.get('/', (req, res) => {
    res.json({message: 'Hello World'})
})

app.listen(3000)
```