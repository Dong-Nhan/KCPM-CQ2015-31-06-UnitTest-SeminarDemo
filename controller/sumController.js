var plus = require('../lib/plus')

const sumController = function (req, res, next) {
    var num1 = parseFloat(req.param('num1', 0), 10) || 0;
    var num2 = parseFloat(req.param('num2', 0), 10) || 0;
    var sum = plus(num1, num2)
    res.header("content-type", "application/json; charset=utf-8")
    res.end(JSON.stringify({
        num1,
        num2,
        sum
    }))
}

module.exports = sumController;