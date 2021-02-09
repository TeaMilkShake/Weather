import React, {useState, useEffect} from 'react'
import {FaCloud} from 'react-icons/fa'
import {useTransition, animated} from 'react-spring'

const Loader = () =>{
    const [show, set] = useState(true)
    const transitions = useTransition(show, null, {
        from: { opacity: 1 },
        leave: { opacity: 0 },
    })


    return transitions.map(({ item, key, props }) =>
        item && <animated.div  key={key} style={props}>
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
                </animated.div>
    )
    
}

export default Loader