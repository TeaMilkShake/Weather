import React, {Fragment, useState, useEffect} from 'react'
import {Transition} from 'react-spring/renderprops'
import { config } from 'react-spring'

const Photo = (props) =>{
    const [zoom, setZoom] = useState(false)

    useEffect(()=>{
        if(!props.isLoaderVisible && props.temperature !== ''){
            setZoom(true)
        }
    },[props.isLoaderVisible, props.temperature])

    if(props.isLoaderVisible){
        return <PhotoLoader />
    }else{
        return(
            <Transition
                items={zoom}
                config= {config.slow}
                from={{ transform: `scale(1)` }}
                enter={{ transform: `scale(1.2)` }}
                leave={{ transform: `scale(1.2)` }}>
                {zoom => zoom && (prop => <div style={{...prop, ...props.backgroundImageStyles}} className="city_photo"></div>)}
            </Transition>
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