import React from 'react'

const Burger = (props) =>{
    return(
    <div className={"burger " + props.locationClass}>
        <div className="burger_line"></div>
        <div className="burger_line"></div>
        <div className="burger_line"></div>
    </div>
    )
}

export default Burger