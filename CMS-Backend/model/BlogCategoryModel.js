const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        category: String,
        large_thumb: {
            type: Array,
            required: [true, "Images are required!"]
        },
    },
    { timestamps: true }
)

const BlogCategory = mongoose.model('blogCategory', categorySchema);

module.exports = BlogCategory;