const express = require('express');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const contact = require("../model/ContactFormModel");
const router = express.Router();

router.post('/contact', catchAsyncErrors(async (req, res) => {
    try {
        const { formData } = req.body;
        console.log("formData", formData)

        await new contact({ ...formData }).save()

        res.status(200).json({ success: true, message: 'We Got Your Info, Thank You!' })

    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}));

router.get('/web-form-leads', catchAsyncErrors(async (req, res) => {
    contact.find({})
        .sort({ _id: -1 })
        .then((result) => {
            return res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

module.exports = router;