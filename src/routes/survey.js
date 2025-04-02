const express = require("express")
const controllerToken = require("../controller/survey")
const router = express.Router()

router.get('/', controllerToken.getSurvey)
router.post('/', controllerToken.postAnswer)

module.exports = router