import React, {useEffect, useState} from 'react'
import Weather from './Weather';
import {getCurrentLocation,getCityWeather} from '../api/index'
const WeatherContainer = () =>{
    const [currentPlace , setCurrentPlace] = useState('')
    const [county , setCountry] = useState('')
    const [weatherData, setWeatherData] = useState({temperature: '', weather: '', description: ''})
    useEffect(() => {
        navigator.geolocation.getCurrentPosition( async (position) => {

            //Get current Location
            const lat = position.coords.latitude
            const long = position.coords.longitude
            let locationResponse = await getCurrentLocation(lat,long)
            locationResponse.city !== '' ? setCurrentPlace(locationResponse.city) : setCurrentPlace(locationResponse.locality)
            setCountry(locationResponse.countryName)


            // Get current city id
            let cityId;
            locationResponse.localityInfo.administrative.map((elem) =>{
                if((elem.name === locationResponse.city || elem.name === locationResponse.locality) && elem.hasOwnProperty('geonameId')){
                    cityId = elem.geonameId
                }
            })

            let WeatherResponse = await getCityWeather(cityId)
            if(WeatherResponse){
                setWeatherData({
                    temperature: Math.round(WeatherResponse.main.temp),
                    weather: WeatherResponse.weather[0].main,
                    description: WeatherResponse.weather[0].description
                })
            }
        })
    },[])
    return(
        <Weather 
            currentPlace={currentPlace} 
            county={county}
            weatherData={weatherData} 
        />
    )
}

export default WeatherContainer