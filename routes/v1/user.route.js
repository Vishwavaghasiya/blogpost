const express = require("express");

const { userValidation } = require("../../validation");
const { userController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createUser",
    validate(userValidation.createUser),
    userController.createUser
);

router.get(
    "/getList",
    userController.getUserList
);

router.get(
    "/getDetails/:userId",
    userController.getUserDetails
);

router.put(
    "/update/:userId",
    userController.updateRecord
);

router.delete(
    "/delete/:userId",
    userController.deleteRecord
);

router.post(
    "/sendMail",
    validate(userValidation.sendMail),
    userController.sendMail
);

module.exports = router