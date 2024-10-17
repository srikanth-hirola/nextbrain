const mongoose = require('mongoose');

const inventorySoftwarePageSchema = new mongoose.Schema(
    {
        draft: {
            type: Boolean,
        },
        slug: {
            type: String,
            required: [true, "Slug is required!"],
        },
        bannertitle: {
            type: String,
            required: [true, "Banner Title is required!"],
        },
        metaTitle: {
            type: String,
            required: [true, "Meta Title is required!"],
        },
        metaDescription: {
            type: String,
            required: [true, "Meta Description is required!"],
        },
        h1title: {
            type: String,
            required: [true, "H1 Title is required!"],
        },
        h2title: {
            type: String,
            required: [true, "H2 Title is required!"],
        },
        h2Description: {
            type: String,
            required: [true, "Post Description is required!"],
        },
        advantagesTitle: {
            type: String,
            required: [true, "Advantages Title is required!"],
        },
        faqs: {
            type: Array,
            // required: [true, "Images are required!"]
        },
        leftsection: {
            type: Array,
            // required: [true, "Images are required!"]
        },
        rightsection: {
            type: Array,
            // required: [true, "Images are required!"]
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



const InventorySoftwarePage = mongoose.model('inventorysoftwarepage', inventorySoftwarePageSchema);

module.exports = InventorySoftwarePage;