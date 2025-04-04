const express = require("express")
const controllerToken = require("../controller/token")
const router = express.Router()

router.post('/', controllerToken.getToken)

module.exports = router