import React, {useState, useRef} from 'react'
import {getCitySuggestions} from '../../api/index'
import Suggestions from './Suggestions'
import {useHistory} from 'react-router-dom'
const Form = (props) => {
    const [cities, setCities] = useState([])
    const [inputValue, setInputValue] = useState("")
    const id = useRef()
    const history = useHistory()

    const handleChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handleKeyDown = () =>{
        clearTimeout(id.current)
    }
    const handleKeyUp = () =>{
        id.current = setTimeout(async()=>{
            let response = await getCitySuggestions(inputValue)
            setCities(response.data)
        },1000)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        inputValue.length > 0 && history.push(`/city?q=${inputValue}&country=${cities[0] ? cities[0].country : 'unfound'}`)
    }
    const handleSelect = (city, country) =>{
        inputValue.length > 0 && history.push(`/city?q=${city}&country=${country}`)
    }

    return(
        <form className={"form "+props.locationClass}>
            <div className="text_input_block">
                <input type="text" placeholder="City name" onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} onChange={handleChange} value={inputValue}/> 
                {inputValue.length !== 0 && <Suggestions handleSelect={handleSelect} suggestions={cities}/>}
            </div>
            <input type="submit" value="Find" onClick={(e) => {handleSubmit(e)}}/>
        </form>
    )
}

export default Form;
