import React from 'react'

const Suggestions = (props) =>{

    if(props.suggestions){
        if(props.suggestions.length === 0){
            return  <div style={{visibility: props.areSuggestionsVisible ? `visible` : `hidden`}} className="suggestions" >
                        <p className="suggestion_no_results">No results</p>
                    </div>
        }else{
            return(
                <div className="suggestions" style={{visibility: props.areSuggestionsVisible ? `visible` : `hidden`}}>
                   {props.suggestions.map((suggestion, index)=>{
                       return <p className="suggestion" onMouseDown={()=> props.handleSelect(suggestion.city, suggestion.country)} key={index}>{`${suggestion.city}, ${suggestion.country}`}</p>
                    })
                    }
                </div>
            )
        }
    }else{
        return <div></div> 
    }
}

export default Suggestions