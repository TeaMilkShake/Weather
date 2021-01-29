import React, {useEffect, useState} from 'react'
import Navbar from '../shared/Navbar'
import PhotoMap from './PhotoMap'
import WeatherProps from './WeatherProps'

const City = (props) =>{
    return(
        <React.Fragment>
            <Navbar />
            <PhotoMap />
            <WeatherProps />
        </React.Fragment>
    )
}

export default City