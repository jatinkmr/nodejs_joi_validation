const Joi = require('joi')

const newDataValidation = data => {
    const dataSchema = Joi.object().keys({
        name: Joi.string().required().min(3).max(30),
        birthyear: Joi.number().integer().min(1970).max(2012),
        designation: Joi.string().allow(null, '')
    })

    return dataSchema.validate(data)
}

module.exports = {
    newDataValidation
}
