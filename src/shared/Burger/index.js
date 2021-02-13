import React, {useContext, useEffect} from 'react'
import {AppContext} from '../../AppContext'
const Burger = (props) =>{
    const context = useContext(AppContext)
    useEffect(()=>{
        const burgerClick = () =>{
            context.toogleBurger()
        }
        context.burgerRef.current.addEventListener('click', burgerClick)
        return ()=>{
            context.burgerRef.current.removeEventListener('click', burgerClick)
        }
    }) 
    return(
        <div ref={context.burgerRef} className={"burger " + props.locationClass}>
            <div className="burger_line"></div>
            <div className="burger_line"></div>
            <div className="burger_line"></div>
        </div>
    )
}

export default Burger