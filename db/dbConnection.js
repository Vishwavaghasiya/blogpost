const mongoose = require("mongoose");
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async (req, res) => {
    mongoose.connect(process.env.MONGODB_URL)
        .then((data) => { console.log("Database connection successfully !") })
        .catch((error) => { console.log("Database connection eroor", error) })
}

module.exports = { connectDB }