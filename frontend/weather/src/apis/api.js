import axios from 'axios'

export const getWeatherInfoFromBackend = async (city) => {
    try {

        const url = 'http://localhost:8000/api/weather/name'

        const options = {
            method: 'GET',
            url: `${url}?location=${city}`
        }

        let response = await axios(options)

        if (!response) return alert('error occured')

        console.log(response)
        return response.data

    } catch (error) {
        console.log(error.message)
    }
}