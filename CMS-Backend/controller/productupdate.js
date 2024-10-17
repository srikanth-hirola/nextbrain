const express = require('express');
const router = express.Router();
const ProductUpdate = require('../model/ProductUpdateModel');
const _ = require('lodash');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const { cacheMiddleware, flushProductUpdate } = require('../middleware/cacheMiddleware');


router.get('/product-update-list', catchAsyncErrors(async (req, res) => {
    ProductUpdate.find({})
        .sort({ _id: -1 })
        .then((result) => {
            return res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

router.get('/pagination', cacheMiddleware, catchAsyncErrors(async (req, res) => {
    const page = req.query.page || 1;
    const ITEMS_PER_PAGE = req.query.limit || 10
    try {
        const result = await ProductUpdate.find({}, { _id: 1, updatetitle: 1, createdAt: 1, })
            .sort({ _id: -1 })
            .skip((page - 1) * ITEMS_PER_PAGE)
            .limit(ITEMS_PER_PAGE)
            .exec();
        const length = await ProductUpdate.countDocuments({});
        res.status(200).json({ blogs: result, length });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}));

router.post('/compose', flushProductUpdate, catchAsyncErrors(async (req, res) => {
    try {
        const { productUpdateData } = req.body;

        await new ProductUpdate({ ...productUpdateData }).save()

        res.status(200).json({ success: true, message: 'Published Product Updates Successfull' })

    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }

}));

// get blog by id
router.get('/blog/slug/:slug', catchAsyncErrors(async (req, res) => {
    const requestSlug = req.params.slug;
    ProductUpdate.findOne({ "slug": requestSlug })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

// blog edit by id
router.get('/productupdate/edit/:id', catchAsyncErrors(async (req, res) => {
    const requestID = req.params.id;
    ProductUpdate.findOne({ _id: requestID })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

router.put('/update/:id', flushProductUpdate, catchAsyncErrors(async (req, res) => {
    try {
        const { productUpdateEdit } = req.body;
        const { id } = req.params;

        await ProductUpdate.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    updatetitle: productUpdateEdit?.updatetitle,
                    updateDescription: productUpdateEdit?.updateDescription,
                },
            }
        )

        res.status(200).json({ success: true, message: 'Published Product Update Successfull' })

    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}));

router.get('/productupdate/:publish', catchAsyncErrors(async (req, res) => {
    try {
        const requestTitle = req.params.publish;
        const result = await ProductUpdate.findOne({ slug: requestTitle });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: 'Product Update not found' });
        }
    } catch (e) {
        res.status(500).json({ error: e.message || 'Internal Server Error' });
    }
}));

module.exports = router;