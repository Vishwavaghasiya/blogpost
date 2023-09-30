const Joi = require("joi");

const createDashboard = {
    body: Joi.object().keys(
        {
            user: Joi.string().required().trim(),
            contactUs: Joi.string().required().trim()
        }
    )
}

module.exports = {
    createDashboard
}