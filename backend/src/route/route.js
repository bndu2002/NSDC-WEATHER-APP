const express = require('express')
const router = express.Router()
const {getWeatherByName} = require('../controller/controller')


router.get("/test" , (req,res)=>{
    res.status(200).send({status:true , message : "APP RUNNING SUCCESSFULLY"})
})

router.get('/api/weather/name',getWeatherByName)

module.exports = router



