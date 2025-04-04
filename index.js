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

app.get('/', (req, res) => {
  res.status(403).send(`
    <html>
      <head><title>403 Forbidden</title></head>
      <body style="text-align: center; font-family: Arial;">
        <img src="https://http.cat/403.jpg" alt="403 Forbidden" width="500px">
      </body>
    </html>
  `);
});

app.use("/token", routesToken)
app.use(midTokenAuth)
app.use("/survey", routesSurvey)

app.listen(PORT, () => {
  console.log(`Server running port ${PORT}`)
})