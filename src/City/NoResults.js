import React from 'react'
import {TiZoomOut} from 'react-icons/ti'

const NoResults = () =>{
    return(
        <div className="no_results_block">
            <div className="no_results_content">
                <div className="no_results_title">
                    <TiZoomOut />
                    <p>No results</p>
                </div>
                <p className="no_results_text">No results for 'Luudown'</p>
            </div>
        </div>
    )
}

export default NoResults