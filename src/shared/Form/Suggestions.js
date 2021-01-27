import React from 'react'

const Suggestions = (props) =>{
    const onSelect = (value) =>{
        props.onSelect(value)
    }

    return(
        <div className="suggestions">
           {props.suggestions.map((suggestion, index)=>{
               return <p className="suggestion" onClick={()=> onSelect(suggestion.city)} key={index}>{suggestion.city}</p>
            })
            }
        </div>
    )
}

export default Suggestions