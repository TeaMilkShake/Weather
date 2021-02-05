import React , {useEffect, useState, useRef, Fragment} from 'react'
import WeatherPhoto, {WeatherPhotoLoader} from './WeatherPhoto'
import WeatherProps, {WeatherPropsLoader} from './WeatherProps'

import {useQuery} from '../hooks'
import {getCityWeather, getCitySuggestions, getCurrentLocation} from '../api'


const WeatherInfo = () =>{
    const [data, setData] = useState({isLoading: true , data: null})
    const cityQuery = useQuery('q')
    const countryQuery = useQuery('country')
    const placeName = useRef({city: '', country: ''})
    useEffect(()=>{
        // Getting city weather by ID !!!
        const fetchData = async() =>{
            setData({isLoading: true, data: null})

            let cityResponse = await getCitySuggestions(cityQuery)
            
            let filteredCities = cityResponse.data.map(async(city)=>{
                if(city.name.toLowerCase() === cityQuery && city.country.toLowerCase() === countryQuery){
                    let locationResponse =  await getCurrentLocation(city.latitude, city.longitude)     
                    placeName.current = {city: city.name, country: city.country}

                    let cityId;
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
        return(
            <Fragment>
                <WeatherPhotoLoader />
                <WeatherPropsLoader />
            </Fragment>
        )
    }else{
        return(
            <Fragment>
                <WeatherPhoto weather={data.data.weather[0].main} weatherDescription={data.data.weather[0].description}/>
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