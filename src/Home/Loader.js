import React, {useState, useEffect} from 'react'
import {FaCloud} from 'react-icons/fa'
import {Transition} from 'react-spring/renderprops'
import { config } from 'react-spring'

const Loader = (props) =>{
    const [show, set] = useState(true)

    useEffect(() => {
        if(!props.isLoaderVisible && props.temperature !== ''){
            set(false)
        }
        
    }, [props.isLoaderVisible, props.temperature])

    return (
        <Transition
            items={show}
            config={config.gentle}
            from={{ opacity: 1 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}>
            {show => show && (props => <div style={props} className="home_loader_block">
                    <div className="animated_loader">
                        <FaCloud/>
                        <FaCloud/>
                        <div className="loading_block">
                            <div className="loading_line"></div>
                            <div className="loading_line"></div>
                            <div className="loading_line"></div>
                            <div className="loading_line"></div>
                        </div>
                    </div>
                </div>)}
        </Transition>
    )
    
}

export default Loader