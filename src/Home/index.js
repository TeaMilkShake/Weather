import React from 'react';
import Form from '../shared/Form'
import Burger from '../shared/Burger'
import background from '../assets/images/clear.jpg'
import {TiWeatherPartlySunny} from 'react-icons/ti';
import About from '../About'

const Home = (props) => {
    const styles={
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }

    return(
        <React.Fragment>
            <About />
            <div className="home_wrapper">
                <div style={styles} className="home_image"></div>
                    <Burger locationClass="home"/>
                    <div className="side_offset home">
                        <p className="home_logo">My weather app</p>
                        <div className="home_weather">
                            <p className="home_temperature">5°C</p>
                            <p className="home_city">
                                Uzhhorod, Ukraine
                                <span className="home_weather_icon"><TiWeatherPartlySunny size="1.3em" /></span>
                            </p>
                        </div>
                        <p className="home_time">20:13</p>

                        {/*Form*/}
                        <Form locationClass="home" />
                    </div>
            </div>
        </React.Fragment>
    )
}
export default Home