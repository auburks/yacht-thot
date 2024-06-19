const express = require('express');
const exphbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const path = require("path");
require('dotenv').config({ path: './app.env' })

const Util = require("./src/Util.js");

// Setup WebServer
const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json())
app.use(cookieParser());

app.use(express.static(__dirname + '/public', {
    maxAge: Number.MAX_VALUE,
    etag: false,
    acceptRanges: false
   }));
app.set('views', path.join(__dirname, '/views'));
app.set('partials', path.join(__dirname, '/partials'));
app.engine('hbs', exphbs.engine({
    extname: '.hbs',
    helpers: require('./config/handlebars-helpers')
}));

app.set('view engine', 'hbs');

app.listen(process.env.HTTP_PORT, () => 
    console.log(`Listening for HTTP on port ${process.env.HTTP_PORT}!`));

app.get('/', (req, res) => {
    //res.cookie('uid', "", { maxAge: 0 });
   // res.cookie('auth_key',"", { maxAge: 0 });
    res.render('index',
        {
           title: "Yacht Thot - Party Boats Near Me",
           description: ""
        }
    )
});

app.get('/faq', (req, res) => {
    res.render('faq',
        {
           title: "Yacht Thot - FAQs",
           description: ""
        }
    )
});

app.get('/support', (req, res) => {
    res.render('support',
        {
           title: "Yacht Thot - Support",
           description: ""
        }
    )
});

app.get('/event', (req, res) => {
    res.render('event',
        {
           title: "Username's Event near Miami, FL",
           description: ""
        }
    )
});

app.get('/user', (req, res) => {
    res.render('user',
        {
           title: "Yacht Thot - Username",
           description: ""
        }
    )
});

app.get('/feed', (req, res) => {
    res.render('feed',
        {
           title: "Yacht Thot - Home",
           description: ""
        }
    )
});

app.get('/privacy-policy', (req, res) => {
    res.render('privacy-policy',
        {
           title: "Yacht Thot - Privacy Policy",
           description: ""
        }
    )
});

app.get('/terms-of-service', (req, res) => {
    res.render('terms-of-service',
        {
           title: "Yacht Thot - Terms of Service",
           description: ""
        }
    )
});

app.get('/boat', (req, res) => {
    res.render('boat',
        {
           title: "Yacht Thot - Boat Profile",
           description: ""
        }
    )
});

app.get('/sign-in', (req, res) => {
    res.render('sign-in',
        {
           title: "Yacht Thot - Sign In",
           description: ""
        }
    )
});

app.get('/about', (req, res) => {
    res.render('about',
        {
           title: "Yacht Thot - About Us",
           description: ""
        }
    )
});

app.get('/onboarding', (req, res) => {
    res.render('onboarding',
        {
           title: "Yacht Thot - Onboarding",
           description: ""
        }
    )
});

//app.get('/update', (req, res) => { res.send(JSON.stringify(Stats.stats)) });