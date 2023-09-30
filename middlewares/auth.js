const jwt = require("jsonwebtoken");
const { User } = require("../models");

const auth = () => async (req, res, next) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return next(new Error("Please authenticate!"));
        }

        const secret_key = "secretkeyhere";

        const decoded = jwt.verify(
            token.replace("Bearer ", ""),
            secret_key
        );

        if (!decoded) {
        }
        const user = await User.findOne({ _id: decoded.user });

        if (!user) {
            return next(new Error("Please authenticate!"));
        }

        req.user = user;
        next();
    } catch (error) {
        return next(new Error(error));
    }
};

module.exports = auth;