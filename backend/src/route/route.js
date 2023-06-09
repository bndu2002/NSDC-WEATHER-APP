const express = require('express')
const router = express.Router()
const { getWeatherByName, getWeatherBYLongLat } = require('../controller/controller')


router.get("/test", (req, res) => {
    res.status(200).send({ status: true, message: "APP RUNNING SUCCESSFULLY" })
})

router.get('/api/weather/name', getWeatherByName)

router.get(`/api/weather/long&lat`, getWeatherBYLongLat)

module.exports = router



