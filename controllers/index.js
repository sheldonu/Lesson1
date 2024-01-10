const helloFunction = (req, res, next) => {
    res.json('Hello Starr');
};

const anotherHello = (req, res, next) => {
    res.json('Hello Josh');
};

module.exports = { helloFunction, anotherHello };