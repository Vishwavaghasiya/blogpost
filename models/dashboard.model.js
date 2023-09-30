const mongoose = require("mongoose");

const dashboardSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        contactUs: {
            type: mongoose.Types.ObjectId,
            ref: "contactUs"
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

const Dashboard = mongoose.model("dashboard", dashboardSchema);
module.exports = Dashboard