const { ContactUs } = require("../models");

const createContactUs = async (reqBody) => {
    return ContactUs.create(reqBody);
}

const getContactUsList = async (req, res) => {
    return ContactUs.find().populate("user");
}

const getContactUsDetails = async (contactUsId) => {
    return ContactUs.findById(contactUsId);
}

const updateRecord = async (contactUsId, updateBody) => {
    return ContactUs.findByIdAndUpdate(contactUsId, { $set: updateBody })
}

const deleteRecord = async (contactUsId) => {
    return ContactUs.findByIdAndDelete(contactUsId);
}

module.exports = {
    createContactUs,
    getContactUsDetails,
    getContactUsList,
    updateRecord,
    deleteRecord
}