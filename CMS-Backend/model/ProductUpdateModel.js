const mongoose = require('mongoose');

const productUpdateSchema = new mongoose.Schema(
    {
        draft: {
            type: Boolean,
        },
        updatetitle: {
            type: String,
            required: [true, "Update Title is required!"],
        },
        updateDescription: {
            type: String,
            required: [true, "Update Description is required!"],
        },
    },
    { timestamps: true }
);



const ProductUpdates = mongoose.model('productupdates', productUpdateSchema);

module.exports = ProductUpdates;