const express = require('express')

const DuckFeeding = require('../models/duck-feeding-model')

const DuckFeedingRouter = express.Router()

DuckFeedingRouter.route('/duck-feeding')

// get rout to fetch the saved data
// use limit query param to limit
// the number of responses
.get( async (req, res, next) => {
    let { limit } = req.query
    limit  = parseInt(limit)
    try {
        const duckFeedingInfos = await DuckFeeding.find({}).sort({'feedingTime': -1}).limit(limit)
        res.send(duckFeedingInfos);
    } catch (e) {
        res.status(500).send(e);
    }
  })
// post request to create data and save in database
.post(async (req, res, next) => {
    try {
        const duckFeedingInfo = new DuckFeeding(req.body)
        const result = await duckFeedingInfo.save()

        return res.status(201).send(result);
    } catch (e) {
        res.status(500).send(e);
    }
  })

module.exports = DuckFeedingRouter
