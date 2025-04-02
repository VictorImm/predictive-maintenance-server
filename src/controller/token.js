const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(5)
const configToken = require("../config/token")

const getToken = (req, res) => {

  try {
    const currentUser = bcrypt.hashSync(req.body.user, salt)
    const validUser = bcrypt.hashSync(process.env.USER1, salt)

    if (currentUser == validUser) {
      res.json({
        message: "Request Success",
        token: configToken.generateAccessToken(validUser)
      }) 
    } else {
      res.json({
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