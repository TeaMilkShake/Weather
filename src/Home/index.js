import React from 'react';
import Form from '../shared/Form'
import Burger from '../shared/Burger'
//import Time from './Time'
import WeatherContainer from './WeatherContainer'

import background from '../assets/images/clear.jpg'
const Home = () => {
    const styles={
        backgroundImage: `url(${background})`,
        backgroundPosition: "center",
        backgroundSize: "cover"
    }

    return(
        <React.Fragment>
            <div className="home_wrapper">
                <div style={styles} className="home_image"></div>
                    <Burger locationClass="home"/>
                    <div className="side_offset home">
                        <p className="home_logo">My weather app</p>
                        <WeatherContainer />
                        <Form locationClass="home" />
                    </div>
            </div>
        </React.Fragment>
    )
}
export default Home