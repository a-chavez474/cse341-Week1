const routes = require('express').Router();

const myControllers = require('../controllers')

routes.get('/', myControllers.someFunction);

routes.get('/more', myControllers.anotherFunction);
//     res.json('Awesome student');
// });

module.exports = routes;