const mongoose = require("mongoose");
const base_url = "http://localhost:8000/"

const blogSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            trim: true
        },
        description: {
            type: String,
            trim: true
        },
        //image , video
        media_type: {
            type: String,
            trim: true
        },
        blog_image: {
            type: String,
            trim: true,
        },
        uploadedBy: {
            type: mongoose.Types.ObjectId,
            ref: "user"
        },
        is_active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
        toJSON: {
            transform: function (doc, data) {
                if (data?.blog_image) {
                    data.blog_image = `${base_url}blog_images/${data.blog_image}`;
                }
            },
        },
    }
);

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog