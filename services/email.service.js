const nodeMailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config();

let transport = nodeMailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
    }
});

/**send mail */
const sendMail = async (to, subject, text) => {
    try {
        return transport.sendMail({
            to,
            subject,
            text,
        });
    } catch (error) {
        console.log(error,"service");
        return false
    }
}

module.exports = {
    sendMail
}