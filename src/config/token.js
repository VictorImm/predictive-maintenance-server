require("dotenv").config()
const SECRET = process.env.SECRET_KEY
const jwt = require("jsonwebtoken")

function generateAccessToken(user) {
  const payload =  {
    user: user
  }
  const secret = SECRET
  const options = { expiresIn: '20s' }

  return jwt.sign(payload, secret, options)
}

function verifyAccessToken(token) {
  const secret = SECRET;

  try {
    const decoded = jwt.verify(token, secret)
    return { success: true, data: decoded }
  } catch (error) {
    return { success: false, error: error.message }
  }
}

module.exports = {
  generateAccessToken,
  verifyAccessToken
}