const configToken = require("../config/token")
const modelUser = require("../models/user")

const getToken = async (req, res) => {
  try {
    const currentUser = req.body.user.toUpperCase()

    if (!currentUser) {
      return res.status(401).json({
        message: "Empty Request",        
      })
    }
    
    const result = await modelUser.userExist(currentUser)
    if (result.success) {
      res.json({
        message: "Request Success",
        token: configToken.generateAccessToken(currentUser)
      }) 
    } else {
      res.status(401).json({
        message: result.message
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