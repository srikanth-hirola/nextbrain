const mongoose = require('mongoose');

const FaqSchema = new mongoose.Schema(
    {
        question: {
            type: String,
            required: [true, "Question is required!"],
        },
        answer: {
            type: String,
            required: [true, "Answer is required!"],
        },
        author: {
            type: Object,
            default: {
                author_name: "Hirola Infotech Solutions ",
                author_avatar: "https://res.cloudinary.com/dq6ok3jsu/image/upload/v1702638627/logo_dvdzrb.svg",
                author_para: "Email is a crucial channel in any marketing mix, and never has this been truer than for today’s entrepreneur. Curious what to say."
            }
        }
    },
    { timestamps: true }
);



const Faq = mongoose.model('faqs', FaqSchema);

module.exports = Faq;