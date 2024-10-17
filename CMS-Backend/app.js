const express = require('express');
const ErrorHandler = require('./middleware/error');
const app = express();
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');
const cron = require('node-cron');
// const Event = require('./model/event');
const compression = require('compression')

app.use(compression())

const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:3000',
  'http://localhost:3001',
];


app.use(
  cors({
    origin: function (origin, callback) {
      // Check if the origin is in the allowedOrigins array
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true,
  })
);

// app.use(cors());

// app.use(express.json());
app.use(cookieParser());
app.use('/test', (req, res) => {
  res.send('Hello world!');
});

// app.use(bodyParser.json({ limit: '50mb' }));
// app.use(bodyParser.urlencoded({ extended: true, limit: '500mb' }));

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ extended: true, limit: '500mb' }));

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
  require('dotenv').config({
    path: 'config/.env',
  });
}

// import routes
// const user = require('./controller/user');
// const shop = require('./controller/shop');
// const product = require('./controller/product');
// const event = require('./controller/event');
// const coupon = require('./controller/coupounCode');
// const payment = require('./controller/payment');
// const order = require('./controller/order');
// const conversation = require('./controller/conversation');
// const message = require('./controller/message');
// const withdraw = require('./controller/withdraw');
// const category = require('./controller/category');
// const shipping = require('./controller/shipping');
// const siteConfig = require('./controller/siteConfig');
// const newsletter = require('./controller/newsletter');
// const form = require('./controller/Form');
const blogs = require('./controller/blogs');
const news = require('./controller/news');
const homefaqs = require('./controller/homefaqs');
const faqs = require('./controller/faqs');
const manualfaqs = require('./controller/manualfaqs');
const privacypolicy = require('./controller/privacypolicy');
const refundpolicy = require('./controller/refundpolicy');
const termsandconditions = require('./controller/termsandconditions');
const industrypage = require('./controller/industrypage');
const accountingsoftwarepage = require('./controller/accountingsoft');
const inventorysoftwarepage = require('./controller/inventorysoft');
const productupdate = require('./controller/productupdate');
const form = require('./controller/form');

const path = require('path');
const Blog = require('./model/BlogModel');

// app.use('/api/v2/user', user);
// app.use('/api/v2/conversation', conversation);
// app.use('/api/v2/message', message);
// app.use('/api/v2/order', order);
// app.use('/api/v2/shop', shop);
// app.use('/api/v2/product', product);
// app.use('/api/v2/event', event);
// app.use('/api/v2/coupon', coupon);
// app.use('/api/v2/payment', payment);
// app.use('/api/v2/withdraw', withdraw);
// app.use('/api/v2/category', category);
// app.use('/api/v2/shipping', shipping);
// app.use('/api/v2/site', siteConfig);
// app.use('/api/v2/newsletter', newsletter);
// app.use('/api/v2/form', form);
app.use('/api/v2/blogs', blogs);
app.use('/api/v2/news', news);
app.use('/api/v2/home-faqs', homefaqs);
app.use('/api/v2/faqs', faqs);
app.use('/api/v2/manual-faqs', manualfaqs);
app.use('/api/v2/privacy-policy', privacypolicy);
app.use('/api/v2/refund-policy', refundpolicy);
app.use('/api/v2/terms-and-conditions', termsandconditions);
app.use('/api/v2/industry-page', industrypage);
app.use('/api/v2/accounting-software-page', accountingsoftwarepage);
app.use('/api/v2/inventory-software-page', inventorysoftwarepage);
app.use('/api/v2/product-update', productupdate);
app.use('/api/v2/form', form);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
})

cron.schedule('* * * * *', () => {
  const date = new Date().toISOString().substring(0, 10);
  EventsCheck(date)
});

// const EventsCheck = async (date) => {
//   const found = await Event.find({ draft: false });
//   found.forEach(async (eventDate) => {
//     const foundDate = new Date(eventDate.start_Date).toISOString().substring(0, 10);
//     if (foundDate === date) {
//       await Event.findByIdAndUpdate(eventDate._id, {
//         $set: {
//           status: "Running"
//         }
//       })
//     }
//   })
// }

app.get('/:slug', (req, res) => {
    const requestedSlug = req.params.slug;
    try {
      Blog.findOne({ slug: requestedSlug })
        .then((result) => {
          res.send(result);
        })
        .catch((e) => {
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  });


// it's for ErrorHandling
app.use(ErrorHandler);

module.exports = app;


