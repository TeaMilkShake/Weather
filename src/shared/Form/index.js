import React, {useState} from 'react'
import {getCitySuggestions} from '../../api/index'
import Suggestions from './Suggestions'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

const Form = (props) => {
    const [cities, setCities] = useState([])
    const [inputValue, setInputValue] = useState("")
    const history = useHistory()
    const [isSuggestionsVisible, setIsSuggestionsVisivle] = useState(false)
    const source = axios.CancelToken.source();
    const handleSelect = (city, country) =>{
        history.push(`/city?q=${city}&country=${country}`)
    }
    const handleChange = (e) =>{
        setInputValue(e.target.value)
    }
    const handleKeyDown = () =>{
        try{
            source.cancel()
        }catch{}
    }
    const handleKeyUp = () =>{
        let fetchData = async() =>{
            if(inputValue.length > 3){
                let response = await getCitySuggestions(inputValue, source.token)
                if(response){
                    setCities(response.data)
                }
            }
        }
        fetchData()
    }
    const handleFocus = () =>{
        setIsSuggestionsVisivle(true)
    }
    const handleBlur = () =>{
        setTimeout(() => {
            setIsSuggestionsVisivle(false)
        }, 200);
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        history.push(`/city?q=${inputValue}&country=${cities[0] ? cities[0].country : 'unfound'}`)
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} className={"form "+props.locationClass}>
            <div className="text_input_block">
                <input type="text" placeholder="City name" onFocus={handleFocus} onBlur={handleBlur} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} onChange={handleChange} value={inputValue}/> 
                {<Suggestions isSuggestionsVisible={isSuggestionsVisible} handleSelect={handleSelect} suggestions={cities}/>}
            </div>
            <input type="submit" value="Find" />
        </form>
    )
}

export default Form;
