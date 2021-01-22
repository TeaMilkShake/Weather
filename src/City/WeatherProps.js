import React from 'react'
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {FaWind} from 'react-icons/fa'
import {BsDropletHalf} from 'react-icons/bs'
import {IoIosSpeedometer} from 'react-icons/io'

const WeatherProps = () =>{
    return(
        <div className="city_text">
            <div className="city_main_info">
                <h1>London, Great Britain</h1>
                <div className="weather_mini_card">
                    <p className="city_temperature">5°C</p>
                    <div className="mini_card_line"></div>
                    <div className="city_weather_icon"><TiWeatherPartlySunny /></div>
                </div>
            </div>
            <div className="city_additional_info">
                <div className="city_additional_info_item">
                    <h2>Wind speed <FaWind /></h2>
                    <p>1.5 m/s</p>
                </div>
                <div className="city_additional_info_item">
                    <h2>Humidity <BsDropletHalf /></h2>
                    <p>100%</p>
                </div>
                <div className="city_additional_info_item">
                    <h2>Pressure <IoIosSpeedometer /></h2>
                    <p>1024</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherProps