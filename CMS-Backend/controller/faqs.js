const express = require('express');
const router = express.Router();
const Faq = require('../model/FaqModel');
const _ = require('lodash');
const cloudinary = require('cloudinary');
// const { isSeller } = require('../middleware/auth');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const { cacheMiddleware, flushFaq } = require('../middleware/cacheMiddleware');


router.get('/faq-list', catchAsyncErrors(async (req, res) => {
    Faq.find({}, { _id: 1, question: 1, answer: 1, })
        .sort({ _id: -1 })
        .then((result) => {
            return res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));


router.get('/categories', catchAsyncErrors(async (req, res) => {
    Blog.find({}, { _id: 1, category: 1 })
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
        const result = await Faq.find({}, { _id: 1, question: 1, answer: 1, })
            .sort({ _id: -1 })
            .skip((page - 1) * ITEMS_PER_PAGE)
            .limit(ITEMS_PER_PAGE)
            .exec();
        const length = await Faq.countDocuments({});
        res.status(200).json({ blogs: result, length });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}));

router.post('/compose', flushFaq, catchAsyncErrors(async (req, res) => {
    try {
        const { faqData } = req.body;

        await new Faq({ ...faqData }).save()

        res.status(200).json({ success: true, message: 'Published Faq Successfull' })

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
    Blog.findOne({ "slug": requestSlug })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

// blog edit by id
router.get('/faq/edit/:id', catchAsyncErrors(async (req, res) => {
    const requestID = req.params.id;
    Faq.findOne({ _id: requestID })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

router.put('/update/:id', flushFaq, catchAsyncErrors(async (req, res) => {
    try {
        const { homeFaqEdit } = req.body;
        const { id } = req.params;

        await Faq.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    question: homeFaqEdit?.question,
                    answer: homeFaqEdit?.answer,
                },
            }
        )

        res.status(200).json({ success: true, message: 'Updated Faq Successfull' })

    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}));

router.get('/faq/:publish', catchAsyncErrors(async (req, res) => {
    try {
        const requestTitle = req.params.publish;
        const result = await Faq.findOne({ slug: requestTitle });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: 'Blog not found' });
        }
    } catch (e) {
        res.status(500).json({ error: e.message || 'Internal Server Error' });
    }
}));

router.delete('/delete-Img/:blogId', flushFaq, catchAsyncErrors(async (req, res) => {
    try {
        const { blogId } = req.params;
        const { public_id } = req.body;
        console.log(public_id, req.body, blogId)
        await cloudinary.v2.uploader.destroy(public_id);
        await Faq.updateOne(
            { _id: blogId },
            { $pull: { large_thumb: { public_id } } }
        )

        res.status(200).json({ message: 'Deleted Image Successfully!' })

    } catch (error) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}));

router.delete('/faq/delete/:id', flushFaq, catchAsyncErrors(async (req, res) => {
    const requestedId = req.params.id;
    try {
        Faq.findByIdAndDelete({ _id: requestedId })
            .then((result) => {
                res.status(200).json({
                    deleted_product: result,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e,
        });
    }
}));

router.delete('/faq/delete/:id', flushFaq, catchAsyncErrors(async (req, res) => {
    const requestedId = req.params.id;
    try {
        Faq.findByIdAndDelete({ _id: requestedId })
            .then((result) => {
                res.status(200).json({
                    deleted_product: result,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            error: e,
        });
    }
}));

module.exports = router;