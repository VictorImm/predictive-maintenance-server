// init
require("dotenv").config()
const PORT = process.env.PORT
const express = require("express")
const app = express()
app.use(express.json())

// config

// controller

// middleware
const midTokenAuth = require("./src/middleware/auth")

// models

// routes
const routesToken = require("./src/routes/token")
const routesSurvey = require("./src/routes/survey")

app.use(midTokenAuth)

app.use("/token", routesToken)
app.use("/survey", routesSurvey)

app.get('/', (req, res) => {
  res.send("Unauthorized")  
})

app.listen(PORT, () => {
  console.log(`Server running port ${PORT}`)
})