import React, {Fragment} from 'react'

const Photo = (props) =>{
    if(props.isLoaderVisible){
        return <PhotoLoader />
    }else{
        return(
            <div style={props.backgroundImageStyles} className="city_photo"></div>            
        )
    }
}

export const PhotoLoader = () =>{
    return(
        <Fragment>
            <div className="city_photo loader"></div>
        </Fragment>
    )
}

export default Photo