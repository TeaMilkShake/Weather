import React from 'react'
import {FaCloudSunRain} from 'react-icons/fa'

const SmallLoader = (props) =>{
    return(
        <div style={{display: props.isLoading ? 'block' : 'none'}} className="small_loader_wrapper">
            <div className="small_loader">
                <FaCloudSunRain className="loader_icon_dark"/>
                <FaCloudSunRain className="loader_icon_dark"/>
                <FaCloudSunRain className="loader_icon_light"/>
            </div>
        </div>
        
    )
}

export default SmallLoader
