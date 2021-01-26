import React from 'react'

const Suggestions = (props) =>{
    return(
        <div className="suggestions">
           {props.suggestions.map((suggestion)=>{
               return <p>{suggestion.city}</p>
            })
            }
        </div>
    )
}

export default Suggestions