const express = require("express");

const contactUsRoute = require("./contactUs.route");
const dashboardRoute = require("./dashboard.route");
const blogRoute = require("./blog.route");
const userRoute = require("./user.route");
const tokenRoute = require("./token.route");

const router = express.Router();

router.use("/contactUs", contactUsRoute);
router.use("/dashboard", dashboardRoute);
router.use("/blog", blogRoute);
router.use("/user", userRoute);
router.use("/token" , tokenRoute);

module.exports = router