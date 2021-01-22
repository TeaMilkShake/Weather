import React from 'react'

const WeatherPropsLoader = () =>{
    return(
        <React.Fragment>
            <div className="city_text">
                <div className="city_main_info loader"></div>
                <div className="city_additional_info">
                    <div className="city_additional_info_item loader"></div>
                    <div className="city_additional_info_item loader"></div>
                    <div className="city_additional_info_item loader"></div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default WeatherPropsLoader