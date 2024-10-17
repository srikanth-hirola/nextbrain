const express = require('express');
const router = express.Router();
const InventorySoftwarePage = require('../model/InventorySoftwareModel');
const _ = require('lodash');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const { cacheMiddleware, flushInventorySoftwarePage } = require('../middleware/cacheMiddleware');


router.get('/inventory-software-page-list', catchAsyncErrors(async (req, res) => {
    InventorySoftwarePage.find({})
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
        const result = await InventorySoftwarePage.find({}, { _id: 1, bannertitle: 1, createdAt: 1, slug: 1, })
            .sort({ _id: -1 })
            .skip((page - 1) * ITEMS_PER_PAGE)
            .limit(ITEMS_PER_PAGE)
            .exec();
        const length = await InventorySoftwarePage.countDocuments({});
        res.status(200).json({ blogs: result, length });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}));

router.post('/compose', flushInventorySoftwarePage, catchAsyncErrors(async (req, res) => {
    try {
        const { invSoftPageData } = req.body;

        await new InventorySoftwarePage({ ...invSoftPageData }).save()

        res.status(200).json({ success: true, message: 'Published Inventory Software Successfull' })

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
router.get('/inventorysoftware/slug/:slug', catchAsyncErrors(async (req, res) => {
    const requestSlug = req.params.slug;
    InventorySoftwarePage.findOne({ "slug": requestSlug })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

// blog edit by id
router.get('/inventorysoftware/edit/:id', catchAsyncErrors(async (req, res) => {
    const requestID = req.params.id;
    InventorySoftwarePage.findOne({ _id: requestID })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

router.put('/update/:id', flushInventorySoftwarePage, catchAsyncErrors(async (req, res) => {
    try {
        const { invSoftPageEdit } = req.body;
        const { id } = req.params;

        await InventorySoftwarePage.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    slug: invSoftPageEdit?.slug,
                    bannertitle: invSoftPageEdit?.bannertitle,
                    h1title: invSoftPageEdit?.h1title,
                    h2title: invSoftPageEdit?.h2title,
                    h2Description: invSoftPageEdit?.h2Description,
                    advantagesTitle: invSoftPageEdit?.advantagesTitle,
                    faqs: invSoftPageEdit?.faqs,
                    leftsection: invSoftPageEdit?.leftsection,
                    rightsection: invSoftPageEdit?.rightsection,
                    metatitle: invSoftPageEdit?.metaTitle,
                    metadescription: invSoftPageEdit?.metaDescription,
                },
            }
        )

        res.status(200).json({ success: true, message: 'Published Inventory Software Successfull' })

    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}));

router.get('/inventorysoftware/:publish', catchAsyncErrors(async (req, res) => {
    try {
        const requestTitle = req.params.publish;
        const result = await InventorySoftwarePage.findOne({ slug: requestTitle });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: 'Inventory Software not found' });
        }
    } catch (e) {
        res.status(500).json({ error: e.message || 'Internal Server Error' });
    }
}));

module.exports = router;