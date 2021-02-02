import React, {useEffect, useState} from 'react'
import Navbar from '../shared/Navbar'
import PhotoMap from './PhotoMap'
import WeatherProps from './WeatherProps'
import {useQuery} from '../hooks'
const City = (props) =>{
    //const cityParam = useQuery('q')
    //const countryParam = useQuery('country')

    //const handleChange = () =>{
        
    //}
    return(
        <React.Fragment>
            <Navbar />
            <PhotoMap />
            <WeatherProps />
        </React.Fragment>
    )
}

export default City