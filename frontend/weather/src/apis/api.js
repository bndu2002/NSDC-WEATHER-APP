import axios from 'axios'

const url = 'http://localhost:8000/api/weather/name'
const url2 = 'http://localhost:8000/api/weather/long&lat'

export const getWeatherInfoFromBackend = async (city) => {
    try {

        const options = {
            method: 'GET',
            url: `${url}?location=${city}`
        }

        let response = await axios(options)

        if (!response) return alert('error occured')

        console.log(response)
        
        return response.data

    } catch (error) {
        alert(error.message)
    }
}

export const getLongDetailsFromBackend = async (location, fields) => {
    try {
        const options = {
            method: 'GET',
            url: `${url2}?location=${location}&fields=${fields}`
        }

        let response = await axios(options)

        if (!response) return alert('error occured')

        console.log('from longi and lat ', response)

        return response.data

    } catch (error) {
        alert(error.message)
    }
}