import React, {useEffect, useState} from 'react'
import Weather from './Weather';
import {getCurrentLocation,getCityWeather} from '../api/index'
const WeatherContainer = () =>{
    const [currentPlace , setCurrentPlace] = useState('')
    const [county , setCountry] = useState('')
    const [temperature, setTemperature] = useState('')
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
                if(elem.name === locationResponse.city && elem.hasOwnProperty('geonameId')){
                    cityId = elem.geonameId
                }
            })

            let WeatherResponse = await getCityWeather(cityId)
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