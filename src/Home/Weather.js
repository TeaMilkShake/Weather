import React, {useEffect} from 'react'
import {TiWeatherPartlySunny} from 'react-icons/ti';

const Weather = () =>{
    
    return(
        <div className="home_weather">
            <p className="home_temperature">5°C</p>
            <p className="home_city">
                Uzhhorod, Ukraine
                <span className="home_weather_icon"><TiWeatherPartlySunny size="1.3em" /></span>
            </p>
        </div>
    )
}

export default Weather