const configToken = require("../config/token")

const tokenAuth = (req, res, next) => {

  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        message: "Empty token request",        
      })
    }

    const result = configToken.verifyAccessToken(token);

    if (!result.success) {
      return res.status(403).json({
        message: "Token expired"
      })
    }
    
    next()
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    }) 
  }
}

module.exports = tokenAuth