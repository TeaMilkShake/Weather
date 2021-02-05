import React, {useState} from 'react'
import {getCitySuggestions} from '../../api/index'
import Suggestions from './Suggestions'
import {useHistory} from 'react-router-dom'
import axios from 'axios'
import SmallLoader from './SmallLoader'

const Form = (props) => {
    const [cities, setCities] = useState()
    const [inputValue, setInputValue] = useState("")
    const [areSuggestionsVisible, setIsSuggestionsVisivle] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const history = useHistory()
    const source = axios.CancelToken.source();

    const handleSelect = (city, country) =>{
        history.push(`Weather/city?q=${city}&country=${country}`)
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
                setIsLoading(true)
                let response = await getCitySuggestions(inputValue, source.token)
                if(response){
                    console.log(response.data)
                    setCities(response.data)
                    setIsLoading(false)
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
        history.push(`Weather/city?q=${inputValue}&country=${cities[0] ? cities[0].country : 'unfound'}`)
    }

    return(
        <form onSubmit={(e) => handleSubmit(e)} className={"form "+props.locationClass}>
            <div className="text_input_block">
                <SmallLoader isLoading={isLoading}/>
                <input type="text" placeholder="Type and select city from list" onFocus={handleFocus} onBlur={handleBlur} onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} onChange={handleChange} value={inputValue}/> 
                {<Suggestions areSuggestionsVisible={areSuggestionsVisible} handleSelect={handleSelect} suggestions={cities}/>}
            </div>
        </form>
    )
}

export default Form;
