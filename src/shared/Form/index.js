import React, {useState, useRef} from 'react'
import {getCitySuggestions} from '../../api/index'
import Suggestions from './Suggestions'

const Form = (props) => {
    const inputRef = useRef() 
    const [cities, setCities] = useState([])
    const [inputValue, setInputValue] = useState("")
    const id = useRef()

    const onChange = (e) =>{
        setInputValue(e.target.value)
    }
    const onKeyDown = () =>{
        clearTimeout(id.current)
    }
    const onKeyUp = () =>{
        id.current = setTimeout(async()=>{
            let response = await getCitySuggestions(inputValue)
            setCities(response.data)
        },500)
    }

    return(
        <form className={"form "+props.locationClass}>
            <div className="text_input_block">
                <input ref={inputRef} type="text" placeholder="City name" onKeyUp={onKeyUp} onKeyDown={onKeyDown} onChange={onChange} value={inputValue && inputValue}/> 
                {inputValue.length !== 0 && <Suggestions suggestions={cities}/>}
            </div>
            <input type="submit" value="Find"/>
        </form>
    )
}

export default Form;
