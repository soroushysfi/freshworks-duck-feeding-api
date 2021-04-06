const express = require('express')

const DuckFeedingRouter = express.Router()

DuckFeedingRouter.route('/duck-feeding')

.get(function (req, res, next) {
    try {
        return res.send('Received a GET HTTP method');
    } catch (e) {
        console.log(e);
    }
  })

.post(function (req, res, next) {
    try {
        return res.send('Received a POST HTTP method');
    } catch (e) {
        console.log(e);
    }
  })

module.exports = DuckFeedingRouter
