import React, {Fragment} from 'react'
import Navbar from '../shared/Navbar'
import WeatherInfo from './WeatherInfo'
const City = () =>{
    return(
        <Fragment>
            <Navbar />
            <WeatherInfo />
        </Fragment>
    )
}

export default City