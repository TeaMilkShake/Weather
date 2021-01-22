import React from 'react'
import {FiMapPin} from 'react-icons/fi'
import background from '../assets/images/clear.jpg'

const PhotoMap = () =>{
    const switcherStyles={
        color: '#fff'
    }
    return(
        <div className="photo_map_block">
            <img src={background} alt=""/>
            <span className="switcher"><FiMapPin style={switcherStyles}/></span>
        </div>
    )
}

export default PhotoMap