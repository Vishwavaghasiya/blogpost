const Joi = require('joi');

const generateTokens = {
    body: Joi.object().keys({
        user: Joi.string().required()
    })
}

module.exports = {
    generateTokens
}