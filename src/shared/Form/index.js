import React from 'react'

const Form = (props) => {
    return(
        <form className={"form "+props.locationClass}>
            <input type="text" placeholder="City name"/>
            <input type="submit" value="Find"/>
        </form>
    )
}

export default Form;