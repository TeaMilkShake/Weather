import React, {createContext, useState, useRef} from 'react'

export const AppContext = createContext()

export const AppProvider = (props) =>{
    const aboutRef = useRef()
    const burgerRef = useRef()
    const isBurgerClicked = useRef(false)
    const toogleBurger = () =>{
        isBurgerClicked.current = !isBurgerClicked.current

        isBurgerClicked.current 
        ? burgerRef.current.classList.add('burger_clicked')
        : burgerRef.current.classList.remove('burger_clicked')
      
        aboutRef.current.style.clipPath = isBurgerClicked.current ? `inset(0 0 0 0)` : `inset(0 0 100% 0)`
    }
    return(
        <AppContext.Provider value={{aboutRef,burgerRef,isBurgerClicked,toogleBurger}}>
            {props.children}
        </AppContext.Provider>
    )
}