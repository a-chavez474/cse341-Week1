const someFunction = (req, res, next) => {
    res.json('Awesome student');
};

const anotherFunction = (req, res, next) => {
    res.json('Awesome people');
};

module.exports = {someFunction, anotherFunction}