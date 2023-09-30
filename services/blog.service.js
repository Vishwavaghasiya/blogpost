const { Blog } = require("../models");

const createBlog = async (reqBody) => {
    return Blog.create(reqBody);
}

const getBlogList = async (req, res) => {
    return Blog.find().populate("uploadedBy");
}

const getBlogById = async (blogId) => {
    return Blog.findById(blogId);
}

const updateRecord = async (blogId, updateBody) => {
    return Blog.findByIdAndUpdate(blogId, { $set: updateBody })
}

const deleteRecord = async (blogId) => {
    return Blog.findByIdAndDelete(blogId);
}

module.exports = {
    createBlog,
    getBlogById,
    getBlogList,
    updateRecord,
    deleteRecord
}