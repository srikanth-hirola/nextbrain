const express = require('express');
const router = express.Router();
const News = require('../model/NewsModel');
const _ = require('lodash');
const NewsCategory = require('../model/NewsCategoryModel');
const cloudinary = require('cloudinary');
// const { isSeller } = require('../middleware/auth');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const { cacheMiddleware, flushNews } = require('../middleware/cacheMiddleware');


router.get('/news-list', catchAsyncErrors(async (req, res) => {
    News.find({}, { _id: 1, title: 1, createdAt: 1, post_date: 1, large_thumb: 1, excerpt: 1, read_time: 1, author: 1, category: 1, slug: 1 })
        .sort({ _id: -1 })
        .then((result) => {
            return res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));


router.get('/categories', catchAsyncErrors(async (req, res) => {
    News.find({}, { _id: 1, category: 1 })
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
        const result = await News.find({}, { _id: 1, title: 1, createdAt: 1, post_date: 1, large_thumb: 1, excerpt: 1, read_time: 1, author: 1, category: 1, slug: 1, })
            .sort({ _id: -1 })
            .skip((page - 1) * ITEMS_PER_PAGE)
            .limit(ITEMS_PER_PAGE)
            .exec();
        const length = await News.countDocuments({});
        res.status(200).json({ blogs: result, length });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}));

router.post('/compose', flushNews, catchAsyncErrors(async (req, res) => {
    try {
        const { newsData } = req.body;
        let allImages = newsData?.large_thumb;

        if (allImages.length === 0) {
            res.status(404).json({ message: "No News Image is uploaded" });
            return;
        }

        const uploadPromises = allImages.map(async (image) => {
            const myCloud = await cloudinary.v2.uploader.upload(image, {
                folder: 'chilly_kitchen/blogs',
            });

            return {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            };
        });

        const uploadedImages = await Promise.all(uploadPromises);

        await new News({ ...newsData, large_thumb: uploadedImages }).save()

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

router.get("/news-category", catchAsyncErrors(async (req, res) => {
    try {
        const categories = await NewsCategory.find({});
        res.status(200).json({ categories })
    } catch (error) {
        res.status(400).json({ message: error })
    }
}));

router.post('/news-category', catchAsyncErrors(async (req, res) => {
    const { category } = req.body;
    try {
        if (!category) {
            res.status(400).json({ message: "Category is required" })
            return;
        }
        const foundCategory = await NewsCategory.find({ category })
        if (foundCategory.length === 0) {
            await new NewsCategory({ category }).save()
            res.status(200).json({ message: "Added Category Successfully" })
            return;
        }
        res.status(400).json({ message: "Category already exist!" })
        return;
    } catch (error) {
        res.status(400).json({ message: error })
    }
}));

// get blog by id
router.get('/blog/slug/:slug', catchAsyncErrors(async (req, res) => {
    const requestSlug = req.params.slug;
    News.findOne({ "slug": requestSlug })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

// blog edit by id
router.get('/news/edit/:id', catchAsyncErrors(async (req, res) => {
    const requestID = req.params.id;
    News.findOne({ _id: requestID })
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}));

router.put('/update/:id', flushNews, catchAsyncErrors(async (req, res) => {
    try {
        const { newsEdit } = req.body;

        const { id } = req.params;
        let allImages = newsEdit?.large_thumb;


        if (allImages.length === 0) {
            res.status(404).json({ message: "No Blog Image is uploaded" });
            return;
        }

        const uploadPromises = allImages.map(async (image) => {

            if (typeof image === "string") {
                const myCloud = await cloudinary.uploader.upload(image, {
                    folder: 'chilly_kitchen/blogs',
                });

                return {
                    public_id: myCloud.public_id,
                    url: myCloud.secure_url,
                };
            } else {
                return image
            }
        });


        const uploadedImages = await Promise.all(uploadPromises);

        await News.findOneAndUpdate(
            { _id: id },
            {
                $set: {
                    slug: newsEdit?.slug,
                    title: newsEdit?.title,
                    newsDescription: newsEdit?.newsDescription,
                    large_thumb: uploadedImages,
                    category: newsEdit?.category,
                    metatitle: newsEdit?.metaTitle,
                    metadescription: newsEdit?.metaDescription,
                    body: newsEdit?.body,
                    excerpt: newsEdit?.excerpt,
                    read_time: newsEdit?.read_time,
                },
            }
        )

        res.status(200).json({ success: true, message: 'Published Blog Successfull' })

    } catch (error) {
        if (error.name === "ValidationError") {
            const validationErrors = Object.values(error.errors).map((err) => err.message);
            res.status(400).json({ error: "Validation Error", message: "All Fields are required!" });
        } else {
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
}));

const DeleteCloudinaryImage = async (public_id) => {
    try {
        await cloudinary.v2.uploader.destroy(public_id);
        return "Success"
    } catch (error) {
    }
}

router.get('/news/:publish', catchAsyncErrors(async (req, res) => {
    try {
        const requestTitle = req.params.publish;
        const result = await News.findOne({ slug: requestTitle });
        if (result) {
            res.status(200).json(result);
        } else {
            res.status(404).json({ error: 'Blog not found' });
        }
    } catch (e) {
        res.status(500).json({ error: e.message || 'Internal Server Error' });
    }
}));

router.delete('/delete-Img/:blogId', flushNews, catchAsyncErrors(async (req, res) => {
    try {
        const { blogId } = req.params;
        const { public_id } = req.body;
        console.log(public_id, req.body, blogId)
        await cloudinary.v2.uploader.destroy(public_id);
        await News.updateOne(
            { _id: blogId },
            { $pull: { large_thumb: { public_id } } }
        )

        res.status(200).json({ message: 'Deleted Image Successfully!' })

    } catch (error) {
        res.status(500).json({ error: error.message || 'Internal Server Error' });
    }
}));

router.delete('/news/delete/:id', flushNews, catchAsyncErrors(async (req, res) => {
    const requestedId = req.params.id;
    try {
        News.findByIdAndDelete({ _id: requestedId })
            .then((result) => {
                res.status(200).json({
                    deleted_product: result,
                });
                Promise.all(result?.large_thumb?.map((img) => {
                    DeleteCloudinaryImage(img?.public_id)
                }))
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