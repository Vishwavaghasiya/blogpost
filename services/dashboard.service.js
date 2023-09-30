const { Dashboard } = require("../models");

const createDashboard = async (reqBody) => {
    return Dashboard.create(reqBody);
}

const getDashboardList = async (req, res) => {
    return Dashboard.find().populate("user").populate("contactUs");
}

const getDashboardById = async (dashboardId) => {
    return Dashboard.findById(dashboardId);
}

const updateRecord = async (dashboardId, updateBody) => {
    return Dashboard.findByIdAndUpdate(dashboardId, { $set: updateBody })
}

const deleteRecord = async (dashboardId) => {
    return Dashboard.findByIdAndDelete(dashboardId);
}

module.exports = {
    createDashboard,
    getDashboardById,
    getDashboardList,
    updateRecord,
    deleteRecord
}