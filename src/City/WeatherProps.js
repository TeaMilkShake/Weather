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
    const [data, setData] = useState({isLoading: true , data: null})
    const cityQuery = useQuery('q')
    const countryQuery = useQuery('country')
    const placeName = useRef({city: '', country: ''})
    useEffect(()=>{
        // Getting city weather by ID !!!
        const fetchData = async() =>{
            setData({isLoading: true, data: null})

            //Get array of cities, up to 5, which have a 'cityQuery' part in their name
            let cityResponse = await getCitySuggestions(cityQuery)
            //I can't get cities id from this response,
            // that's so i make another api call, using
            // lat and long which a got from 'city response'
            let filteredCities = cityResponse.data.map(async(city)=>{
                if(city.name.toLowerCase() === cityQuery && city.country.toLowerCase() === countryQuery){
                    
                    //Get list of cities, which are in the given lat and long area.
                    let locationResponse =  await getCurrentLocation(city.latitude, city.longitude)
                    
                    // Need to store cities name and it's country in ref to display in DOM
                    placeName.current = {city: city.name, country: city.country}

                    // Variable for getting current city id
                    let cityId;

                    // Map through cities to get the one, which name and country fully 
                    // correspond to given queries 
                    locationResponse.localityInfo.administrative.map((elem) =>{
                        if(elem.name.toLowerCase() === countryQuery && elem.hasOwnProperty('geonameId')){
                            cityId = elem.geonameId
                        }
                    })

                    //Get city weather
                    let data = await getCityWeather(cityId)
                    setData({isLoading: false, data: data})
                } 
            })      
            if(filteredCities.length === 0){
                setData({isLoading: false, data: null})
            }        
        }
        fetchData()
    },[cityQuery, countryQuery])     
    
    if(data.isLoading){
        return <WeatherPropsLoader />
    }else{  
        if(data.data === null){
            return <NoResults />
        }else{
            return <div className="city_text">
                        <div className="city_main_info">
                            <h1>{placeName.current.city}, {placeName.current.country}</h1>
                            <div className="weather_mini_card">
                                <p className="city_temperature">{Math.round(data.data.main.temp)}°C</p>
                                <div className="mini_card_line"></div>
                                <div className="city_weather_icon"><TiWeatherPartlySunny /></div>
                            </div>
                        </div>
                        <div className="city_additional_info">
                            <div className="city_additional_info_item">
                                <h2>Wind speed <FaWind /></h2>
                                <p>{data.data.wind.speed} m/s</p>
                            </div>
                            <div className="city_additional_info_item">
                                <h2>Humidity <BsDropletHalf /></h2>
                                <p>{data.data.main.humidity}%</p>
                            </div>
                            <div className="city_additional_info_item">
                                <h2>Pressure <IoIosSpeedometer /></h2>
                                <p>{data.data.main.pressure} psf</p>
                            </div>
                        </div>
                    </div>
        }  
    }
}

export default WeatherProps