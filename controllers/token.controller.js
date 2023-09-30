const { tokenService } = require("../services");

/**generate token */
const generateToken = async (req, res) => {
    try {
        const reqBody = req.body;
        const token = await tokenService.generateToken(reqBody);
        reqBody.token = token;

        const saveToken = await tokenService.saveToken(reqBody);

        res.status(200).json(
            {
                success: true,
                message: "Token Created !",
                data: saveToken
            }
        );
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message || "Something wents wrong !"
        });
    }
}

/**verify token  */
const verifyToken = async (req, res) => {
    res.status(200).json({
        success: true,
        message: "Token create successfully !",
        data: req.user
    });
}

module.exports = {
    generateToken,
    verifyToken
}