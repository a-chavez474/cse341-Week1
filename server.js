// var express = require('express');
// var app = express();

// app.use('/', require('./routes'));

// app.listen(3000, () => {
//     console.log('Running on port 3000')

// });
//////////////////////

// const express = require('express');
// const app = express();
// const port = process.env.PORT || 8080;

// app.use('/', require('./routes'));

// app.listen(port, () => {
//     console.log(`Running on port ${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const mongodb = require('./db/connect');
const professionalRoutes = require('./routes');

const app = express();
const port = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
app.use('/professional', professionalRoutes);

mongodb.initDb((err, mongodb) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(port);
        console.log(`Connected to DB and listening on ${port}`);
    }
});

