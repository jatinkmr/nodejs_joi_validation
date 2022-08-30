const { newDataValidation } = require('../validations')

const homePageController = async (req, res, next) => {
    try {
        res.status(200).send('Welcome to Home Page!!')
    } catch (error) {
        next(error)
    }
}

const createNewDataController = async (req, res, next) => {
    try {
        const { error } = await newDataValidation(req.body)
        if (error) {
            res.status(400).json({
                error: true,
                errorMessage: error.details[0].message
            })
        }
        res.status(200).json({
            bodyData: req.body
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {
    homePageController,
    createNewDataController
}