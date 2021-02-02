import React from 'react'

const Suggestions = (props) =>{
    return(
        <div className="suggestions" style={{visibility: props.isSuggestionsVisible ? `visible` : `hidden`}}>
           {props.suggestions.map((suggestion, index)=>{
               return <p className="suggestion" onClick={()=> props.handleSelect(suggestion.city, suggestion.country)} key={index}>{`${suggestion.city}, ${suggestion.country}`}</p>
            })
            }
        </div>
    )
}

export default Suggestions