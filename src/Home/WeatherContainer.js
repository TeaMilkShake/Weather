import React, {useEffect, useState} from 'react'
import Weather from './Weather';
import {getCurrentLocation,getCityWeather} from '../api/index'
const WeatherContainer = () =>{
    const [currentPlace , setCurrentPlace] = useState('')
    const [county , setCountry] = useState('')
    const [temperature, setTemperature] = useState('')
    useEffect(() => {
        navigator.geolocation.getCurrentPosition( async (position) => {
            const lat = position.coords.latitude
            const long = position.coords.longitude
            let locationResponse = await getCurrentLocation(lat,long)
            locationResponse.city !== '' ? setCurrentPlace(locationResponse.city) : setCurrentPlace(locationResponse.locality)
            setCountry(locationResponse.countryName)

            let WeatherResponse = await getCityWeather(locationResponse.city)
            setTemperature(Math.round(WeatherResponse.main.temp))
        })
    },[])
    return(
        <Weather 
            currentPlace={currentPlace} 
            county={county}
            temperature={temperature} 
        />
    )
}

export default WeatherContainer