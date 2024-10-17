const express = require('express');
const router = express.Router();
const AccountingSoftwarePage = require('../model/AccountingSoftware');
const _ = require('lodash');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const { cacheMiddleware, flushAccountingSoftwarePage } = require('../middleware/cacheMiddleware');


router.get('/accounting-software-page-list', catchAsyncErrors(async (req, res) => {
    AccountingSoftwarePage.find({})
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
        const result = await AccountingSoftwarePage.find({}, { _id: 1, bannertitle: 1, createdAt: 1, slug: 1, })
            .sort({ _id: -1 })
            .skip((page - 1) * ITEMS_PER_PAGE)
            .limit(ITEMS_PER_PAGE)
            .exec();
        const length = await AccountingSoftwarePage.countDocuments({});
        res.status(200).json({ blogs: result, length });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}));

router.post('/compose', flushAccountingSoftwarePage, catchAsyncErrors(async (req, res) => {
    try {
        const { accSoftPageData } = req.body;

        await new AccountingSoftwarePage({ ...accSoftPageData }).save()

        res.status(200).json({ success: true, message: 'Published Accounting Software Successfull' })

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
router.get('/accountingsoftware/slug/:slug', catchAsyncErrors(async (req, res) => {
    const requestSlug = req.params.slug;
    AccountingSoftwarePage.findOne({ "slug": requestSlug })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

// blog edit by id
router.get('/accountingsoftware/edit/:id', catchAsyncErrors(async (req, res) => {
    const requestID = req.params.id;
    AccountingSoftwarePage.findOne({ _id: requestID })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

router.put('/update/:id', flushAccountingSoftwarePage, catchAsyncErrors(async (req, res) => {
    try {
        const { accSoftPageEdit } = req.body;
        const { id } = req.params;

        await AccountingSoftwarePage.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    slug: accSoftPageEdit?.slug,
                    bannertitle: accSoftPageEdit?.bannertitle,
                    h1title: accSoftPageEdit?.h1title,
                    h2title: accSoftPageEdit?.h2title,
                    h2Description: accSoftPageEdit?.h2Description,
                    advantagesTitle: accSoftPageEdit?.advantagesTitle,
                    faqs: accSoftPageEdit?.faqs,
                    leftsection: accSoftPageEdit?.leftsection,
                    rightsection: accSoftPageEdit?.rightsection,
                    metatitle: accSoftPageEdit?.metaTitle,
                    metadescription: accSoftPageEdit?.metaDescription,
                },
            }
        )

        res.status(200).json({ success: true, message: 'Published Accounting Software Successfull' })

    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}));

router.get('/accountingsoftware/:publish', catchAsyncErrors(async (req, res) => {
    try {
        const requestTitle = req.params.publish;
        const result = await AccountingSoftwarePage.findOne({ slug: requestTitle });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: 'Accounting Software not found' });
        }
    } catch (e) {
        res.status(500).json({ error: e.message || 'Internal Server Error' });
    }
}));

module.exports = router;