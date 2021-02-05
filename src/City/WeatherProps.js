import React, {Fragment} from 'react'
import {FaWind} from 'react-icons/fa'
import {BsDropletHalf} from 'react-icons/bs'
import {IoIosSpeedometer} from 'react-icons/io'
import NoResults from './NoResults'
import WeatherIcon from '../shared/WeatherIcon'

const WeatherProps = (props) =>{
    if(props.noResults === true){
        return <NoResults />
    }else{
        return <div className="city_text">
                    <div className="city_main_info">
                        <h1>{props.placeName.city}, {props.placeName.country}</h1>
                        <div className="weather_mini_card">
                            <p className="city_temperature">{Math.round(props.temperature)}°C</p>
                            <div className="mini_card_line"></div>
                            <div className="city_weather_icon">
                                <WeatherIcon 
                                    weather={props.weather} 
                                    weatherDescription={props.weatherDescription} 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="city_additional_info">
                        <div className="city_additional_info_item">
                            <h2>Wind speed <FaWind /></h2>
                            <p>{props.windSpeed} m/s</p>
                        </div>
                        <div className="city_additional_info_item">
                            <h2>Humidity <BsDropletHalf /></h2>
                            <p>{props.humidity}%</p>
                        </div>
                        <div className="city_additional_info_item">
                            <h2>Pressure <IoIosSpeedometer /></h2>
                            <p>{props.pressure} psf</p>
                        </div>
                    </div>
                </div>
    }  
}

export const WeatherPropsLoader = () =>{
    return(
        <Fragment>
            <div className="city_text">
                <div className="city_main_info loader"></div>
                <div className="city_additional_info">
                    <div className="city_additional_info_item loader"></div>
                    <div className="city_additional_info_item loader"></div>
                    <div className="city_additional_info_item loader"></div>
                </div>
            </div>
        </Fragment>
    )
}

export default WeatherProps