import axios from 'axios';

const config = {
    bigDataCloudBaseUrl: `https://api.bigdatacloud.net/data/reverse-geocode-client?`,
    openWeatherBaseUrl: `https://api.openweathermap.org/data/2.5/weather?`,
    geoDBBaseUrl: `http://geodb-free-service.wirefreethought.com/v1/geo/cities?`,
}

export const CitySuggestions = axios.create()

export const getCurrentLocation = async (lat,long)=>{
    try{
        let response = await axios.get(`${config.bigDataCloudBaseUrl}latitude=${lat}&longitude=${long}&localityLanguage=en`)
        return response.data
    }catch(error){
        console.log(`error`)
    }   
}
export const  getCityWeather = async (id)=>{
    try{
        let response = await axios.get(`${config.openWeatherBaseUrl}id=${id}&units=metric&APPID=${process.env.REACT_APP_OPEN_WEATHER_API_KEY}`)
        return response.data
    }catch(error){
        console.log(`error`)
    } 
}
export const getCitySuggestions = async (city, cancelToken)=>{
    try{
        let response = await CitySuggestions.get(`${config.geoDBBaseUrl}limit=5&offset=0&namePrefix=${city}&minPopulation=40000`, {cancelToken})
        return response.data
    }catch(error){
        
    }  
}
