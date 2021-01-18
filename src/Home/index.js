import React from 'react';
import background from '../assets/images/clear.jpg'
const Home = (props) => {
    return(
        <div className="home_wrapper">
            <img src={background} alt="" className="home_image"/>
            <div className="side_offset home">
                <p className="home_logo">My weather app</p>
                <div className="burger home">
                    <div className="burger_line"></div>
                    <div className="burger_line"></div>
                    <div className="burger_line"></div>
                </div>
                <div className="home_weather">
                    <p className="home_temperature">5°C</p>
                    <p className="home_city">
                        Uzhhorod, Ukraine
                        <span className="home_weather_icon"></span>
                    </p>
                </div>
                <p className="home_time">20:13</p>

                {/*Form*/}
                <form className="form home">
                    <input type="text" placeholder="Search for weather forecasts"/>
                    <input type="submit" value="Find"/>
                </form>
            </div>
        </div>
    )
}
export default Home