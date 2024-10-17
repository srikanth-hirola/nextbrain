const express = require('express');
const router = express.Router();
const RefundPolicy = require('../model/RefundPolicyModal');
const _ = require('lodash');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');


router.get('/refund', catchAsyncErrors(async (req, res) => {
    RefundPolicy.find({}, { _id: 1, title: 1, createdAt: 1, author: 1, slug: 1 })
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


        await new RefundPolicy({ ...privacypolicy }).save()

        res.status(200).json({ success: true, message: 'Published Refund Policy Successfull' })

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
    RefundPolicy.findOne({ "slug": requestSlug })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

// blog edit by id
router.get('/refund/edit/:id', catchAsyncErrors(async (req, res) => {
    const requestID = req.params.id;
    RefundPolicy.findOne({ _id: requestID })
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

        await RefundPolicy.findOneAndUpdate(
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

        res.status(200).json({ success: true, message: 'Published Refund Policy Successfull' })

    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}));

router.get('/refund/:publish', catchAsyncErrors(async (req, res) => {
    try {
        const requestTitle = req.params.publish;
        const result = await RefundPolicy.findOne({ slug: requestTitle });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: 'Refund Policy not found' });
        }
    } catch (e) {
        res.status(500).json({ error: e.message || 'Internal Server Error' });
    }
}));

module.exports = router;