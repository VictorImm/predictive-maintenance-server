const configToken = require("../config/token")

const tokenAuth = (req, res, next) => {

  try {
    if (req.path == "/token") {
      console.log("Login Path")
    } else {
      console.log("Not Login Path")
      const authHeader = req.headers['authorization'];
      const token = authHeader && authHeader.split(' ')[1];

      if (!token) {
        return res.sendStatus(401);
      }

      const result = configToken.verifyAccessToken(token);

      if (!result.success) {
        return res.status(403).json({ error: result.error });
      }

      // req.user = result.data;
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal Server Error"
    }) 
  }
  next()
}

module.exports = tokenAuth