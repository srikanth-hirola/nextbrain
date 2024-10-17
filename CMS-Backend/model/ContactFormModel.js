const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        firstname: {
            type: String,
            required: [true, 'Please enter your name!'],
        },
        lastname: {
            type: String,
        },
        // phoneNumber: {
        //     type: String,
        //     required: [true, 'Please enter your phone number!'],
        // },
        subject: {
            type: String,
            required: [true, 'Please enter your subject!'],
        },
        industry: {
            type: String,
            required: [true, 'Please Select Your Industry!'],
        },
        email: {
            type: String,
            required: [true, 'Please enter your email!'],
        },
        message: {
            type: String,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema);
