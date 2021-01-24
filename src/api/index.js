import axios from 'axios';
const config = {
    bigDataCloudBaseUrl: `https://api.bigdatacloud.net/data/reverse-geocode-client?`,
    openWeatherBaseUrl: `https://api.openweathermap.org/data/2.5/weather?`,
    key: `5f173b1653a520b1204c3d8cc7202fb6`
}
export const APIRequests = {
    getCurrentLocation: async (lat,long)=>{
        let response = await axios.get(`${config.bigDataCloudBaseUrl}latitude=${lat}&longitude=${long}&localityLanguage=en`)
        return response.data
    },
    getCityWeather: async (city)=>{
        alert(city)
        let response = await axios.get(`${config.openWeatherBaseUrl}q=${city}&units=metric&APPID=${config.key}`)
        return response.data
    },
} 