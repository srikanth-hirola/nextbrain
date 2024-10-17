const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        category: String
    }
)

const NewsCategory = mongoose.model('newsCategory', categorySchema);

module.exports = NewsCategory;