import React , {useEffect, useState, useRef} from 'react'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {FaWind} from 'react-icons/fa'
import {BsDropletHalf} from 'react-icons/bs'
import {IoIosSpeedometer} from 'react-icons/io'
import WeatherPropsLoader from './WeatherPropsLoader'
import {useQuery} from '../hooks'
import {getCityWeather, getCitySuggestions, getCurrentLocation} from '../api'
//import NoResults from './NoResults'

const WeatherProps = () =>{
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState(null)
    const cityQuery = useQuery('q')
    const countryQuery = useQuery('country')
    const placeName = useRef({city: '', country: ''})
    useEffect(()=>{
        const fetchData = async() =>{
            setIsLoading(true)
            let cityResponse = await getCitySuggestions(cityQuery)
            cityResponse.data.map( async(city)=>{
                if(city.name.toLowerCase() === cityQuery && city.country.toLowerCase() === countryQuery){
                    let locationResponse =  await getCurrentLocation(city.latitude, city.longitude)
                    placeName.current = {city: city.name, country: city.country}

                    // Get current city id
                    let cityId;
                    locationResponse.localityInfo.administrative.map((elem) =>{
                        if(elem.name.toLowerCase() === countryQuery && elem.hasOwnProperty('geonameId')){
                            cityId = elem.geonameId
                        }
                    })
                    setData(null)
                    let data = await getCityWeather(cityId)
                    setData(data)
                }
            })            
            setIsLoading(false)
        }
        fetchData()
    },[cityQuery, countryQuery])     
    
    if(data){
        return <div className="city_text">
                    <div className="city_main_info">
                        <h1>{placeName.current.city}, {placeName.current.country}</h1>
                        <div className="weather_mini_card">
                            <p className="city_temperature">{Math.round(data.main.temp)}°C</p>
                            <div className="mini_card_line"></div>
                            <div className="city_weather_icon"><TiWeatherPartlySunny /></div>
                        </div>
                    </div>
                    <div className="city_additional_info">
                        <div className="city_additional_info_item">
                            <h2>Wind speed <FaWind /></h2>
                            <p>{data.wind.speed} m/s</p>
                        </div>
                        <div className="city_additional_info_item">
                            <h2>Humidity <BsDropletHalf /></h2>
                            <p>{data.main.humidity}%</p>
                        </div>
                        <div className="city_additional_info_item">
                            <h2>Pressure <IoIosSpeedometer /></h2>
                            <p>{data.main.pressure} psf</p>
                        </div>
                    </div>
                </div>
    }else{
        return <WeatherPropsLoader />
        
    }
            

   
}

export default WeatherProps