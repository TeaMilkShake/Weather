import React, {Fragment} from 'react'

const Photo = ({styles}) =>{
    return(
        <div style={styles} className="city_photo"></div>            
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