import React, {useState, useEffect} from 'react';
import Form from '../shared/Form'
import Burger from '../shared/Burger'
import Weather from './Weather'
import WeatherPhoto from '../shared/WeatherPhoto'
import HomePhoto from './HomePhoto'
import Loader from './Loader'
import {getCurrentLocation,getCityWeather} from '../api/index'

const Home = () => {
    const [isLoaderVisible, setIsLoaderVisible] = useState(true)
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
            <div className="home_wrapper">
                {(isLoaderVisible || weatherData.temperature === '') ? <Loader/> : null}
                <WeatherPhoto setIsLoaderVisible={setIsLoaderVisible} weather={weatherData.weather} weatherDescription={weatherData.description}>
                    <HomePhoto />
                </WeatherPhoto>

                <Burger locationClass="home"/>
                <div className="side_offset home">
                    <p className="home_logo">My weather app</p>
                    <Weather 
                        currentPlace={currentPlace} 
                        county={county}
                        weatherData={weatherData} 
                    />
                    <Form locationClass="home" />
                </div> 
            </div>
        )
}
export default Home