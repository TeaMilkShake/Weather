import React, {useEffect} from 'react'

const Suggestions = (props) =>{
    const handleSelect = (city,country) =>{
        props.handleSelect(city,country)
    }
    
    return(
        <div className="suggestions">
           {props.suggestions.map((suggestion, index)=>{
               return <p className="suggestion" onClick={()=> handleSelect(suggestion.city, suggestion.country)} key={index}>{`${suggestion.city}, ${suggestion.country}`}</p>
            })
            }
        </div>
    )
}

export default Suggestions