const { contactUsService } = require("../services");

const createContactUs = async (req, res) => {
    try {
        const reqBody = req.body;
        const contactUs = await contactUsService.createContactUs(reqBody);

        if (!contactUs) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        res.status(200).json({
            success: true,
            message: "ContactUS created !",
            data: contactUs
        });
    } catch (error) {
        res.status(error?.message || 400).json({
            success: false,
            message: error?.message || "Something wents wrong , please try again or later !"
        });
    }
}

/**get list */
const getContactUsList = async (req, res) => {
    try {
        const getList = await contactUsService.getContactUsList();
        if (!getList) {
            throw new Error("ContactUs is not found !");
        }

        res.status(200).json({
            success: true,
            message: "ContactUs list get successfully !",
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
const getContactUsDetails = async (req, res) => {
    try {
        const contactUsExist = await contactUsService.getContactUsById(req.params.contactUsId);
        if (!contactUsExist) {
            throw new Error("ContactUs not found !");
        }

        res.status(200).json({
            success: true,
            message: "ContactUs is finded by id !",
            data: contactUsExist
        })
    } catch (error) {

    }
}

/**update record */
const updateRecord = async (req, res) => {
    try {
        const contactUsId = req.params.contactUsId;
        const contactUsEx = await contactUsService.getContactUsById(contactUsId);
        if (!contactUsEx) {
            throw new Error("Something wents wrong , please try again or later !");
        }

        const updated = await contactUsService.updateRecord(contactUsId, req.body);

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
        const contactUsId = req.params.contactUsId;
        const contactUsExist = await contactUsService.getContactUsList(contactUsId);
        if (!contactUsExist) {
            throw new Error("ContactUs is not found !");
        }

        await contactUsService.deleteRecord(contactUsId);

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
    createContactUs,
    getContactUsList,
    getContactUsDetails,
    updateRecord,
    deleteRecord
}