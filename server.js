// var express = require('express');
// var app = express();

// app.use('/', require('./routes'));

// app.listen(3000, () => {
//     console.log('Running on port 3000')

// });

const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use('/', require('./routes'));

app.listen(port, () => {
    console.log(`Running on port ${port}`);
});