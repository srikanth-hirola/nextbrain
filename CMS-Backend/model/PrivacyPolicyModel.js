const mongoose = require('mongoose');

const privacyPolicySchema = new mongoose.Schema(
    {
        draft: {
            type: Boolean,
        },
        slug: {
            type: String,
            required: [true, "Slug is required!"],
        },
        title: {
            type: String,
            required: [true, "Title is required!"],
        },
        metaTitle: {
            type: String,
            required: [true, "Meta Title is required!"],
        },
        metaDescription: {
            type: String,
            required: [true, "Meta Description is required!"],
        },
        body: {
            type: String,
            required: [true, "Page Content required!"],
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



const Privacypolicy = mongoose.model('privacypolicy', privacyPolicySchema);

module.exports = Privacypolicy;