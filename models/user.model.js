const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        contactUs: {
            type: mongoose.Types.ObjectId,
            ref: "contactUs"
        },
        blog: {
            type: mongoose.Types.ObjectId,
            ref: "blog"
        },
        user_name: {
            type: String,
            trim: true
        },
        first_name: {
            type: String,
            trim: true
        },
        last_name: {
            type: String,
            trim: true
        },
        address: {
            type: String,
            trim: true
        },
        dateOfBirth: {
            type: String,
            trim: true
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

const User = mongoose.model("user", userSchema);
module.exports = User