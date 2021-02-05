import React, {Fragment, useState, useEffect} from 'react'
import background from '../assets/images/clear.jpg'

const PhotoMap = () =>{
    const [isImageLoading, setIsImageLoading] = useState(true)

    useEffect(()=>{
        if(isImageLoading){
            const image = new Image()
            image.src= background
            image.onload = () =>{
                setIsImageLoading(false)
            }
        }
    }, [isImageLoading])

    if(isImageLoading){
        return <WeatherPhotoLoader />
    }else{
        return(
            <div className="photo_map_block">
                <img src={background} alt=""/>
            </div>
        )
    }
}

export const WeatherPhotoLoader = () =>{
    return(
        <Fragment>
            <div className="photo_map_block loader"> </div>
        </Fragment>
    )
}

export default PhotoMap