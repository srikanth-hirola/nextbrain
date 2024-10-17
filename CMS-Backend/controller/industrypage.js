const express = require('express');
const router = express.Router();
const IndustryPage = require('../model/IndustryPageModel');
const _ = require('lodash');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const { cacheMiddleware, flushIndustryPage } = require('../middleware/cacheMiddleware');


router.get('/industry-page-list', catchAsyncErrors(async (req, res) => {
    IndustryPage.find({})
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
        const result = await IndustryPage.find({}, { _id: 1, bannertitle: 1, createdAt: 1, slug: 1, })
            .sort({ _id: -1 })
            .skip((page - 1) * ITEMS_PER_PAGE)
            .limit(ITEMS_PER_PAGE)
            .exec();
        const length = await IndustryPage.countDocuments({});
        res.status(200).json({ blogs: result, length });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}));

router.post('/compose', flushIndustryPage, catchAsyncErrors(async (req, res) => {
    try {
        const { industryPageData } = req.body;

        await new IndustryPage({ ...industryPageData }).save()

        res.status(200).json({ success: true, message: 'Published Industry Page Successfull' })

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
router.get('/industry/slug/:slug', catchAsyncErrors(async (req, res) => {
    const requestSlug = req.params.slug;
    IndustryPage.findOne({ "slug": requestSlug })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

// blog edit by id
router.get('/industrypage/edit/:id', catchAsyncErrors(async (req, res) => {
    const requestID = req.params.id;
    IndustryPage.findOne({ _id: requestID })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

router.put('/update/:id', flushIndustryPage, catchAsyncErrors(async (req, res) => {
    try {
        const { industryPageEdit } = req.body;
        const { id } = req.params;

        await IndustryPage.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    slug: industryPageEdit?.slug,
                    bannertitle: industryPageEdit?.bannertitle,
                    h1title: industryPageEdit?.h1title,
                    h2title: industryPageEdit?.h2title,
                    h2Description: industryPageEdit?.h2Description,
                    advantagesTitle: industryPageEdit?.advantagesTitle,
                    faqs: industryPageEdit?.faqs,
                    leftsection: industryPageEdit?.leftsection,
                    rightsection: industryPageEdit?.rightsection,
                    metatitle: industryPageEdit?.metaTitle,
                    metadescription: industryPageEdit?.metaDescription,
                },
            }
        )

        res.status(200).json({ success: true, message: 'Published Industry Page Successfull' })

    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}));

router.get('/industrypage/:publish', catchAsyncErrors(async (req, res) => {
    try {
        const requestTitle = req.params.publish;
        const result = await IndustryPage.findOne({ slug: requestTitle });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: 'Industry Page not found' });
        }
    } catch (e) {
        res.status(500).json({ error: e.message || 'Internal Server Error' });
    }
}));

module.exports = router;