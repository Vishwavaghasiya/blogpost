const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema(
    {
        token : {
            type : String
        },
        user : {
            type : mongoose.Types.ObjectId,
            ref : "user"
        },
        is_active : {
            type : Boolean,
            default : true
        }
    },
    {
        timestamps : true,
        versionKey : false
    }
);

const Token = mongoose.model("token" , tokenSchema);
module.exports = Token