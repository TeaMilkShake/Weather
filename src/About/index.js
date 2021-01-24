import React, {useRef, useEffect, useContext} from 'react'
import aboutImg from "../assets/images/about.png";
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {MdLocationCity} from 'react-icons/md'
import {AiFillFacebook, AiFillGithub} from 'react-icons/ai'
import {AppContext} from '../AppContext'
const About = (props) =>{
    const context = useContext(AppContext)

    return(
        <div ref={context.aboutRef} className="about"> 
            <img src={aboutImg} alt=""/>
            <div className="about_info_block">
                <div className="about_top_part">
                    <h1>About & Contacts</h1>
                    <div className="about_item">
                        <div className="about_item_icon">
                            <TiWeatherPartlySunny />
                        </div>
                        <p>This application represents a weather search system.</p>
                    </div>
                    <div className="about_item">
                        <div className="about_item_icon">
                            <MdLocationCity />
                        </div>
                        <p>Search for weather conditions in different cities.</p>
                    </div>
                </div>
                <div className="about_bottom_part">
                    <div className="about_email">
                        <div></div>
                        <p>nik.yanovskyy@gmail.com</p>
                    </div>
                    <a href="#" target="_blank" className="about_link_btn">
                        <AiFillFacebook />
                    </a>
                    <a href="#" target="_blank" className="about_link_btn">
                        <AiFillGithub />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About