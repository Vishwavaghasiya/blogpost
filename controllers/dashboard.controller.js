const { dashboardService } = require("../services");

/**create dashboard */
const createDashboard = async (req, res) => {
    try {
        const reqBody = req.body;
        const dashboard = await dashboardService.createDashboard(reqBody);
        if (!dashboard) {
            throw new Error("Dashboard not found !");
        }

        res.status(200).json({
            success: true,
            message: "Dashboard created !",
            data: dashboard
        });
    } catch (error) {
        res.status(error?.message).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/** get list */
const getDashboardList = async (req, res) => {
    try {
        const getList = await dashboardService.getDashboardList();
        if (!getList) {
            throw new Error("Dashboard not found !");
        }

        res.status(200).json({
            success: true,
            message: "Dashboard list !",
            data: getList
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get details by id */
const getdashboardDetails = async (req, res) => {
    try {
        const dashboardExist = await dashboardService.getDashboardById(req.params.dashboardId);
        if (!dashboardExist) {
            throw new Error("dashboard not found !");
        }

        res.status(200).json({
            success: true,
            message: "dashboard is finded by id !",
            data: dashboardExist
        })
    } catch (error) {

    }
}

/**update record */
const updateRecord = async (req, res) => {
    try {
        const dashboardId = req.params.dashboardId;
        const dashboardEx = await dashboardService.getDashboardById(dashboardId);
        if (!dashboardEx) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        const updated = await dashboardService.updateRecord(dashboardId, req.body);

        res.status(200).json({
            success: true,
            message: "Record updated !",
            data: updated
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**delete record */
const deleteRecord = async (req, res) => {
    try {
        const dashboardId = req.params.dashboardId;
        const dashboardExist = await dashboardService.getDashboardList(dashboardId);
        if (!dashboardExist) {
            throw new Error("dashboard is not found !");
        }

        await dashboardService.deleteRecord(dashboardId);

        res.status(200).json({
            success: true,
            message: "Record deleted successfully !"
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

module.exports = {
    createDashboard,
    getDashboardList,
    getdashboardDetails,
    updateRecord,
    deleteRecord
}