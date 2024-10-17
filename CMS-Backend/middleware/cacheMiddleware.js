const NodeCache = require('node-cache');
const cache = new NodeCache();

const cacheMiddleware = (req, res, next) => {
    console.log("caache middle ware")
    try {
        const cacheKey = req.originalUrl;
        const cachedData = cache.get(cacheKey);
        if (cachedData) {
            res.json(JSON.parse(cachedData));
        } else {
            const originalJson = res.json;

            res.json = (data) => {
                try {
                    cache.set(cacheKey, JSON.stringify(data), 900); // 15 min
                    originalJson.call(res, data);
                } catch (error) {
                    originalJson.call(res, data);
                }
            };

            next();
        }
    } catch (error) {
        next(error);
    }
};

// '/api/v2/site/site-config',
// '/api/v2/category/get-all-categories',

const flushSiteConfig = (req, res, next) => {
    cache.del('/api/v2/site/site-config-chilly-kitchen');
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}

const flushCategories = (req, res, next) => {
    cache.del('/api/v2/category/get-all-categories');
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}

const flushProducts = (req, res, next) => {
    const allKeys = cache.keys();
    Promise.all(allKeys.map((item) => {
        if (item !== '/api/v2/category/get-all-categories' && item !== '/api/v2/site/site-config') {
            cache.del(item);
        }
    }))
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}

const flushBlogs = (req, res, next) => {
    console.log("flush blogs")
    const allKeys = cache.keys();
    Promise.all(allKeys.map((item) => {
        if (item.includes("/api/v2/blogs/pagination")) {
            cache.del(item);
        }
    }))
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}

const flushNews = (req, res, next) => {
    const allKeys = cache.keys();
    Promise.all(allKeys.map((item) => {
        if (item.includes("/api/v2/news/pagination")) {
            cache.del(item);
        }
    }))
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}

const flushHomeFaq = (req, res, next) => {
    const allKeys = cache.keys();
    Promise.all(allKeys.map((item) => {
        if (item.includes("/api/v2/home-faqs/pagination")) {
            cache.del(item);
        }
    }))
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}

const flushFaq = (req, res, next) => {
    const allKeys = cache.keys();
    Promise.all(allKeys.map((item) => {
        if (item.includes("/api/v2/faqs/pagination")) {
            cache.del(item);
        }
    }))
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}

const flushManualFaq = (req, res, next) => {
    const allKeys = cache.keys();
    Promise.all(allKeys.map((item) => {
        if (item.includes("/api/v2/manual-faqs/pagination")) {
            cache.del(item);
        }
    }))
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}

const flushIndustryPage = (req, res, next) => {
    const allKeys = cache.keys();
    Promise.all(allKeys.map((item) => {
        if (item.includes("/api/v2/industry-page/pagination")) {
            cache.del(item);
        }
    }))
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}

const flushAccountingSoftwarePage = (req, res, next) => {
    const allKeys = cache.keys();
    Promise.all(allKeys.map((item) => {
        if (item.includes("/api/v2/accounting-software-page/pagination")) {
            cache.del(item);
        }
    }))
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}

const flushInventorySoftwarePage = (req, res, next) => {
    const allKeys = cache.keys();
    Promise.all(allKeys.map((item) => {
        if (item.includes("/api/v2/inventory-software-page/pagination")) {
            cache.del(item);
        }
    }))
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}

const flushProductUpdate = (req, res, next) => {
    const allKeys = cache.keys();
    Promise.all(allKeys.map((item) => {
        if (item.includes("/api/v2/product-update/pagination")) {
            cache.del(item);
        }
    }))
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}

const flushProductsByCategory = (req, res, next) => {
    const allKeys = cache.keys();
    Promise.all(allKeys.map((item) => {
        if (item.includes("/api/v2/category/search")) {
            cache.del(item);
        }
    }))
    const originalJson = res.json;
    res.json = (data) => {
        originalJson.call(res, data);
    }
    next()
}


module.exports = { cacheMiddleware, flushSiteConfig, flushCategories, flushProducts, flushBlogs, flushProductsByCategory, flushNews, flushHomeFaq, flushFaq, flushManualFaq, flushIndustryPage, flushProductUpdate, flushAccountingSoftwarePage, flushInventorySoftwarePage };
