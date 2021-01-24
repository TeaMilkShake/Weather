import React from 'react'
import {TiWeatherPartlySunny} from 'react-icons/ti';
const Weather = (props) =>{
    return(
        <div className="home_weather">
            <p className="home_temperature">{props.temperature}°C</p>
            <p className="home_city">
                {props.currentPlace}, {props.county}
                <span className="home_weather_icon"><TiWeatherPartlySunny size="1.3em" /></span>
            </p>
        </div>
    )
}

export default Weather