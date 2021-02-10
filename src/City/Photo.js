import React, {Fragment} from 'react'

const Photo = ({backgroundImageStyles}) =>{
    return(
        <div style={backgroundImageStyles} className="city_photo"></div>            
    )
}

export const PhotoLoader = () =>{
    return(
        <Fragment>
            <div className="city_photo loader"></div>
        </Fragment>
    )
}

export default Photo