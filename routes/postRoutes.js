let express = require('express');
let router = express.Router();
let EmailForm = require('../models/emailForm');
const nodeMailer = require('nodemailer')

async function mainMail(name, email,) {
    const transporter = nodeMailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: "newell.hermann3@ethereal.email",
            pass: "guaG8J9j7g3fZx5vja",
        },
    });
    const mailOption = {
        from:'<yogeshthakare401@gmail.com>',
        to: email,
        subject: "Form Submitted successfuly",
        text: `Thank you ${name} for submitting your information`
    };

    transporter.sendMail(mailOption, function (error, info) {
        if (error) {
            console.log(error)
        } else {
            console.log("Email Sent " + info.response)
        }
    });
}


router.post('/', async (req, res) => {
    try {
        console.log(req.body);

        let data = await EmailForm.create({
            name: req.body.name,
            dob: req.body.dob,
            email: req.body.email,
            mobNumber: req.body.mobNumber
        })
        if (data) {
            await mainMail(req.body.name, req.body.email);
        }
        res.status(200).json({
            note: "Mail sent Successfully",
            data
        })

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: error.message
        })
    }
})

router.get('/', async (req, res) => {
    try {
        console.log(req.body)
        let data = await EmailForm.find()
        res.status(200).json({
            status: "Succes",
            data
        })

    } catch (error) {
        res.status(500).json({
            status: 'Failed',
            message: error.message
        })
    }
})

module.exports = router;