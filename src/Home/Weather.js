import React from 'react'
import {TiWeatherPartlySunny} from 'react-icons/ti';
import WeatherIcon from '../shared/WeatherIcon'
const Weather = (props) =>{
    return(
        <div className="home_weather">
            <p className="home_temperature">{props.weatherData.temperature}°C</p>
            <p className="home_city">
                {props.currentPlace}, {props.county}
                <span className="home_weather_icon">
                    <WeatherIcon 
                        weather={props.weatherData.weather} 
                        weatherDescription={props.weatherData.description} 
                    /> 
                    </span>
            </p>
        </div>
    )
}

export default Weather