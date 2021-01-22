import React from 'react'
import Navbar from '../shared/Navbar'
import About from '../About'
import PhotoMap from './PhotoMap'
import WeatherProps from './WeatherProps'
import NoResults from './NoResults'

const City = (props) =>{
    return(
        <React.Fragment>
            <About />
            <Navbar />
            <PhotoMap />
            <WeatherProps />
        </React.Fragment>
    )
}

export default City