import React , {useEffect, useState, useRef, Fragment} from 'react'
import Photo, {PhotoLoader} from './Photo'
import WeatherProps, {WeatherPropsLoader} from './WeatherProps'

import {useQuery} from '../hooks'
import {getCityWeather, getCitySuggestions, getCurrentLocation} from '../api'

import WeatherPhoto from '../shared/WeatherPhoto'
import axios from 'axios'
const WeatherInfo = () =>{
    const [isLoaderVisible, setIsLoaderVisible] = useState(true)
    const [data, setData] = useState({isLoading: true , data: null})
    const cityQuery = useQuery('q').toLowerCase()
    const countryQuery = useQuery('country').toLowerCase()
    const placeName = useRef({city: '', country: ''})

    useEffect(()=>{
        let getCitySuggestions_CancelToken = axios.CancelToken.source()
        let getCurrentLocation_CancelToken = axios.CancelToken.source()
        let getCityWeather_CancelToken = axios.CancelToken.source()

     
        // Getting city weather by ID !!!
        const fetchData = async() =>{
            setData({isLoading: true, data: null})

            let cityResponse = await getCitySuggestions(cityQuery, getCitySuggestions_CancelToken.token)
            if(cityResponse){
                let filteredCities = cityResponse.data.map(async(city)=>{
                    if(city.name.toLowerCase() === cityQuery && city.country.toLowerCase() === countryQuery){
                        let locationResponse =  await getCurrentLocation(city.latitude, city.longitude, getCurrentLocation_CancelToken.token) 
                        if(locationResponse){
                            placeName.current = {city: city.name, country: city.country}
    
                            let cityId;
                            locationResponse.localityInfo.administrative.map((elem) =>{
                                if(elem.name.toLowerCase() === countryQuery && elem.hasOwnProperty('geonameId')){
                                    cityId = elem.geonameId
                                }
                            })
        
                            //Get city weather
                            let data = await getCityWeather(cityId, getCityWeather_CancelToken.token)
                            setData({isLoading: false, data: data})
                        }         
                    } 
                })      
                if(filteredCities.length === 0){
                    setData({isLoading: false, data: null})
                }      
            }  
        }
        fetchData()
        return ()=>{
            getCitySuggestions_CancelToken.cancel()
            getCurrentLocation_CancelToken.cancel()
            getCityWeather_CancelToken.cancel()
        }
    },[cityQuery, countryQuery])    
    
    if(data.isLoading || !data){
        return(
            <Fragment>
                <PhotoLoader />
                <WeatherPropsLoader />
            </Fragment>
        )
    }else{
        return(
            <Fragment>
                <WeatherPhoto setIsLoaderVisible={setIsLoaderVisible} weather={data.data.weather[0].main} weatherDescription={data.data.weather[0].description}>
                    <Photo isLoaderVisible={isLoaderVisible} temperature={data.data.main.temp}/>
                </WeatherPhoto>

                <WeatherProps 
                    isLoading={data.isLoading}
                    noResults={data.data ? false : true}
                    temperature={data.data.main.temp}
                    weather={data.data.weather[0].main}
                    weatherDescription={data.data.weather[0].description}
                    windSpeed={data.data.wind.speed}
                    humidity={data.data.main.humidity}
                    pressure={data.data.main.pressure}
                    placeName={placeName.current}/>
            </Fragment> 
        )
    }
}

export default WeatherInfo