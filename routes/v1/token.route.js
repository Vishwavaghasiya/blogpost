const express = require("express");

const { tokenController } = require("../../controllers");
const { tokenValidation } = require("../../validation");
const validate = require("../../middlewares/validate");
const auth = require("../../middlewares/auth.js");

const router = express.Router();

/**create jsonWebToken */
router.post(
    "/createToken",
    validate(tokenValidation.generateTokens),
    tokenController.generateToken
);

/**verify token to get user details */
router.get(
    "/verify-token",
    auth(),
    tokenController.verifyToken
);

module.exports = router