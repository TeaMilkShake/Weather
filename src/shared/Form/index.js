import React, {useState, useRef, useEffect} from 'react'
import {getCitySuggestions} from '../../api/index'
import Suggestions from './Suggestions'

const Form = (props) => {
    const inputRef = useRef()
    const timeout = (e) => {
        return setTimeout(async()=>{
                console.log(e.target.value)
                let response = await getCitySuggestions(e.target.value)
                setCities(response.data)
                console.log(cities)
            },2000)
    }
        
    const [cities, setCities] = useState([{city: 's'}])
    const onKeyUp = () =>{
        clearInterval(timeout)
    }
    const onKeyDown = (e) =>{
        timeout(e)
    }
   
    useEffect(()=>{ 
        inputRef.current.addEventListener('keyup',onKeyUp)
        inputRef.current.addEventListener('keydown',onKeyDown)

        return ()=>{
            inputRef.current.removeEventListener('keyup',onKeyUp)
            inputRef.current.removeEventListener('keydown',onKeyDown)
            }
    })
    return(
        <form className={"form "+props.locationClass}>
            <div className="text_input_block">
                <input ref={inputRef} type="text" placeholder="City name"/> 
                <Suggestions suggestions={cities}/>
            </div>
            <input type="submit" value="Find"/>
        </form>
    )
}

export default Form;
