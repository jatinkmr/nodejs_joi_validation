const router = require('express').Router()
const Controller = require('../Controller')

router.get('/', Controller.homePageController)
router.post('/create-new', Controller.createNewDataController)

module.exports = router
