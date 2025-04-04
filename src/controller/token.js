const configToken = require("../config/token")

const getToken = (req, res) => {

  try {
    const currentUser = req.body.user
    const validUser = process.env.USER1

    if (currentUser == validUser) {
      res.json({
        message: "Request Success",
        token: configToken.generateAccessToken(validUser)
      }) 
    } else {
      res.status(401).json({
        message: "Invalid User",        
      }) 
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    }) 
  }
}

module.exports = {
  getToken
}