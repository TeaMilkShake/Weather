import React , {useEffect, useState, useRef} from 'react'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {FaWind} from 'react-icons/fa'
import {BsDropletHalf} from 'react-icons/bs'
import {IoIosSpeedometer} from 'react-icons/io'
import WeatherPropsLoader from './WeatherPropsLoader'
import {useQuery} from '../hooks'
import {getCityWeather, getCitySuggestions, getCurrentLocation} from '../api'
import NoResults from './NoResults'

const WeatherProps = () =>{
    const [isLoading, setIsLoading] = useState(true)
    const [responseState, setResponseState] = useState('pending')
    const queryParams = useQuery()
    const weatherResponseRef = useRef()
    const locationResponseRef = useRef()

    useEffect(()=>{
        const fetchData = async() =>{
            if(isLoading){
                    if(responseState !== `rejected`){
                        let cityResponse = await getCitySuggestions(queryParams.get(`q`).toLowerCase())
                        console.log(cityResponse)
                        cityResponse.data.map( async(city)=>{
                            if(city.name.toLowerCase() === queryParams.get(`q`).toLowerCase() && city.country === queryParams.get('country')){
                                locationResponseRef.current = await getCurrentLocation(city.latitude, city.longitude)
                                console.log(locationResponseRef.current)

                                // Get current city id
                                let cityId;
                                locationResponseRef.current.localityInfo.administrative.map((elem) =>{
                                    if(elem.name === queryParams.get('country') && elem.hasOwnProperty('geonameId')){
                                        cityId = elem.geonameId
                                    }
                                })
                                weatherResponseRef.current = await getCityWeather(cityId)
                                console.log(weatherResponseRef.current)
                                setResponseState('fulfilled')
                            }
                        })
                        if(cityResponse.data.length === 0){
                            setResponseState('rejected')
                        }
                    }      
            }
            setIsLoading(false)
        }
        fetchData()
    },[queryParams, isLoading, responseState])

    if(responseState === 'pending'){
        return <WeatherPropsLoader />
    }
    if(responseState === 'rejected'){
        return <NoResults />
    }
    if (responseState === 'fulfilled'){
        return <div className="city_text">
                    <div className="city_main_info">
                        <h1>{queryParams.get('q')}, {weatherResponseRef.current.sys.country /*locationResponseRef.current.countryName*/}</h1>
                        <div className="weather_mini_card">
                            <p className="city_temperature">{Math.round(weatherResponseRef.current.main.temp)}°C</p>
                            <div className="mini_card_line"></div>
                            <div className="city_weather_icon"><TiWeatherPartlySunny /></div>
                        </div>
                    </div>
                    <div className="city_additional_info">
                        <div className="city_additional_info_item">
                            <h2>Wind speed <FaWind /></h2>
                            <p>{weatherResponseRef.current.wind.speed} m/s</p>
                        </div>
                        <div className="city_additional_info_item">
                            <h2>Humidity <BsDropletHalf /></h2>
                            <p>{weatherResponseRef.current.main.humidity}%</p>
                        </div>
                        <div className="city_additional_info_item">
                            <h2>Pressure <IoIosSpeedometer /></h2>
                            <p>{weatherResponseRef.current.main.pressure} psf</p>
                        </div>
                    </div>
                </div>
    }
}

export default WeatherProps