import React from 'react'
import {FaCloud} from 'react-icons/fa'

const Loader = () =>{
    return(
        <div className="home_loader_block">
            <div className="animated_loader">
                <FaCloud/>
                <FaCloud/>
                <div className="loading_block">
                    <div className="loading_dot"></div>
                    <div className="loading_dot"></div>
                    <div className="loading_dot"></div>
                    <div className="loading_dot"></div>
                </div>
            </div>
        </div>
    )
}

export default Loader