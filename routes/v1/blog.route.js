const express = require("express");

const { upload } = require("../../middlewares/upload")
const { blogValidation } = require("../../validation");
const { blogController } = require("../../controllers");
const validate = require("../../middlewares/validate");

const router = express.Router();

router.post(
    "/createBlog",
    upload.single("blog_image"),
    validate(blogValidation.createBlog),
    blogController.createBlog
);

router.get(
    "/getList",
    blogController.getBlogList
);

router.get(
    "/getDetails/:blogId",
    blogController.getBlogDetails
);

router.put(
    "/update/:blogId",
    blogController.updateRecord
);

router.delete(
    "/delete/:blogId",
    blogController.deleteRecord
);

module.exports = router