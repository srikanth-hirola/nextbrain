const express = require('express');
const router = express.Router();
const PrivacyPolicy = require('../model/PrivacyPolicyModel');
const _ = require('lodash');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');


router.get('/privacypolicy', catchAsyncErrors(async (req, res) => {
    PrivacyPolicy.find({}, { _id: 1, title: 1, createdAt: 1, author: 1, slug: 1 })
        .sort({ _id: -1 })
        .then((result) => {
            return res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));


router.post('/compose', catchAsyncErrors(async (req, res) => {
    try {
        const { privacypolicy } = req.body;


        await new PrivacyPolicy({ ...privacypolicy }).save()

        res.status(200).json({ success: true, message: 'Published News Successfull' })

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
    PrivacyPolicy.findOne({ "slug": requestSlug })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

// blog edit by id
router.get('/privacypolicy/edit/:id', catchAsyncErrors(async (req, res) => {
    const requestID = req.params.id;
    PrivacyPolicy.findOne({ _id: requestID })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

router.put('/update/:id', catchAsyncErrors(async (req, res) => {
    try {
        const { privacyPolicyEdit } = req.body;

        const { id } = req.params;

        await PrivacyPolicy.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    slug: privacyPolicyEdit?.slug,
                    title: privacyPolicyEdit?.title,
                    metatitle: privacyPolicyEdit?.metaTitle,
                    metadescription: privacyPolicyEdit?.metaDescription,
                    body: privacyPolicyEdit?.body,
                },
            }
        )

        res.status(200).json({ success: true, message: 'Published Privacy Policy Successfull' })

    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}));

router.get('/privacypolicy/:publish', catchAsyncErrors(async (req, res) => {
    try {
        const requestTitle = req.params.publish;
        const result = await PrivacyPolicy.findOne({ slug: requestTitle });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: 'Blog not found' });
        }
    } catch (e) {
        res.status(500).json({ error: e.message || 'Internal Server Error' });
    }
}));

module.exports = router;