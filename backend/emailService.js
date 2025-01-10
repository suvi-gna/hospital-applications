const nodemailer = require("nodemailer")
const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "chinnam.suvigna@gmail.com",
       pass: "apvbkliamjfyqwhp"
    }
})
module.exports = transporter












