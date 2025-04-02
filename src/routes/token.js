const express = require("express")
const controllerToken = require("../controller/token")
const router = express.Router()

router.get('/', controllerToken.getToken)

module.exports = router