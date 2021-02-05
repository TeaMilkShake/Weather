import React from 'react'
import Form from '../../shared/Form'
import Burger from '../../shared/Burger'

const Navbar = (props) =>{
    return(
        <div className="navbar_background">
            <div className="side_offset navbar">
                <div className="search_block">
                    <Form locationClass="navbar"/>
                </div>
            </div>
            <Burger locationClass="navbar"/>
        </div>
        
    )
}

export default Navbar