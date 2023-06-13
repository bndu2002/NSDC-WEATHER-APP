const axios = require('axios')


const getWeatherByName = async (req, res) => {
    try {

        const { location } = req.query

        const apikey = process.env.API_KEY

        const options = {
            method: 'GET',
            url: `https://api.tomorrow.io/v4/weather/forecast?location=${location}&apikey=${apikey}`

        }


        const response = await axios(options)

        if (!response) return res.status(400).send({ status: false, message: "Error In Response" })

        let { data } = response

        let hourlyData = data.timelines.hourly

        //const curretnTime = new Date()

        // Get the current time in UTC format
        var currentUTCTime = new Date().toISOString();

        // Variable to store the smallest time difference
        let smallestDiff = Math.abs(currentUTCTime - new Date(hourlyData[0].time));



        // Variable to store the index of the closest time in the array
        let closestIndex = 0;



        // const covertUTCtoIST = (utcTimeString) => {
        //     var utcTime = new Date(utcTimeString);
        //     var istOffset = 5.5 * 60 * 60 * 1000; // IST offset in milliseconds
        //     var istTime = new Date(utcTime.getTime() + istOffset);
        //     var istTimeString = istTime.toLocaleString();
        //     return istTimeString;
        // }

        for (let i = 1; i < hourlyData.length; i++) {
            let diff = Math.abs(currentUTCTime - new Date(hourlyData[i].time));
            if (diff < smallestDiff) {
                smallestDiff = diff;
                closestIndex = i;
            }
        }

        // The closest time and value
        // let closestTime = hourlyData[closestIndex].time;

        // const currTime = new Date(closestTime).toLocaleTimeString()
        //var closestValue = hourlyArray[closestIndex].value;

        // let finalData = {
        //     time: currTime,
        //     temperature: hourlyData[closestIndex].values.temperature,
        //     windSpeed: hourlyData[closestIndex].values.windSpeed,
        //     humidity: hourlyData[closestIndex].values.humidity,
        //     rainIntensity: hourlyData[closestIndex].values.rainIntensity

        // }

        let finalData = []

        //hourlyData[closestIndex + 5]

        for (let j = closestIndex; j < closestIndex + 6 && j < hourlyData.length; j++) {

            let utcTime = hourlyData[j].time;

            const UTCtoIST = new Date(utcTime).toLocaleTimeString()
            // let UTCtoIST = new Date(hourlyData[j].time.toLocaleTimeString())
            let obj = {
                time: UTCtoIST,
                temperature: hourlyData[j].values.temperature,
                windSpeed: hourlyData[j].values.windSpeed,
                humidity: hourlyData[j].values.humidity,
                rainIntensity: hourlyData[j].values.rainIntensity,
                cloudCover: hourlyData[j].values.cloudCover
            }

            finalData.push(obj)

        }

        return res.status(200).send({ status: true, message: 'Success', data: finalData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


const getWeatherBYLongLat = async (req, res) => {
    try {

        const apikey = process.env.API_KEY

        const { location, fields } = req.query

        let units = 'metric'
        let timesteps = '1h'

        console.log(req.query)

        const options = {
            method: 'GET',
            url: `https://api.tomorrow.io/v4/timelines?location=${location}&fields=${fields}&timesteps=${timesteps}&units=${units}&apikey=${apikey}`
        }

        const response = await axios(options)

        if (!response) return res.status(400).send({ status: false, message: "Error In Response" })

        let { data } = response

        console.log('data===>', data.data.timelines)

        let intervals = data.data.timelines[0].intervals

        let finalData = []
        for (let i = 0; i < 6 && i < intervals.length; i++) {
            let utcTime = intervals[i].startTime
            let currTime = new Date(utcTime).toLocaleTimeString()
            // console.log(intervals[i])
            // { startTime: '2023-06-13T08:00:00Z', values: { humidity: 76 } }
            // { startTime: '2023-06-13T09:00:00Z', values: { humidity: 63.86 } }
            // { startTime: '2023-06-13T10:00:00Z', values: { humidity: 56.15 } }
            // { startTime: '2023-06-13T11:00:00Z', values: { humidity: 43.01 } }
            // { startTime: '2023-06-13T12:00:00Z', values: { humidity: 34.46 } }
            // { startTime: '2023-06-13T13:00:00Z', values: { humidity: 33.7 } }
            let obj = {
                time: currTime,
                [fields]: intervals[i].values[fields]//accessing the key on the basis of what is coming in fields
            }
            console.log(obj)
            finalData.push(obj)
        }

        return res.status(200).send({ status: true, message: 'Success', data: finalData })

    } catch (error) {
        return res.status(500).send({ status: false, message: error.message })
    }
}


module.exports = { getWeatherByName, getWeatherBYLongLat }