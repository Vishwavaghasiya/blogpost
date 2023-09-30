const Joi = require("joi");

const createContactUs = {
    body: Joi.object().keys(
        {
            name: Joi.string().required().trim(),
            email: Joi.string().required().trim(),
            subject: Joi.string().required().trim(),
            message: Joi.string().required().trim(),
            user: Joi.string().required().trim()
        }
    )
}

module.exports = {
    createContactUs
}