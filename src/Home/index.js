import React from 'react';
import background from '../assets/images/clear.jpg'
const Home = (props) => {
    return(
        <div className="home_wrapper">
            <img src={background} alt="" className="home_image"/>
            <div className="side_offset home">
                <h1 className="home_logo">My weather app</h1>
                <div className="menu home"></div>
                <div className="home_weather">
                    <p className="home_temperature">5°C</p>
                    <p className="home_city">
                        Uzhhorod, Ukraine
                        <span className="home_weather_icon"></span>
                    </p>
                </div>
                <h1 className="home_time">20:13</h1>

                {/*Form*/}
                <form>
                    <input type="text" placeholder="Search for weather forecasts"/>
                    <input type="submit" value="Find"/>
                </form>
            </div>
        </div>
    )
}
export default Home