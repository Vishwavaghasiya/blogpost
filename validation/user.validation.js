const Joi = require("joi");

const createUser = {
    body: Joi.object().keys(
        {
            user_name: Joi.string().required().trim(),
            first_name: Joi.string().required().trim(),
            last_name: Joi.string().required().trim(),
            address: Joi.string().required().trim(),
            dateOfBirth: Joi.string().required().trim(),
            contactUs: Joi.string().required().trim(),
            blog: Joi.string().required().trim()
        }
    )
}

/** Send mail */
const sendMail = {
  body: Joi.object({
    email: Joi.string().required().trim().email(),
    subject: Joi.string().required().trim(),
    text: Joi.string().required().trim()
  }),
};

module.exports = {
    createUser,
    sendMail
}