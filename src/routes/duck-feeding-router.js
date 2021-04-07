const express = require('express')

const DuckFeeding = require('../models/duck-feeding-model')

const DuckFeedingRouter = express.Router()

DuckFeedingRouter.route('/duck-feeding')

.get( async (req, res, next) => {
    let { limit } = req.query
    limit  = parseInt(limit)
    try {
        const duckFeedingInfos = await DuckFeeding.find({}).limit(limit)
        res.send(duckFeedingInfos);
    } catch (e) {
        res.status(500).send(e);
    }
  })

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
