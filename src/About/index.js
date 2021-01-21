import React from 'react'
import aboutImg from "../assets/images/about.png";
import {TiWeatherPartlySunny} from 'react-icons/ti'
import {MdLocationCity} from 'react-icons/md'
import {AiFillFacebook, AiFillGithub} from 'react-icons/ai'

const About = () =>{
    return(
        <div className="about">
            <img src={aboutImg} alt=""/>
            <div className="about_info_block">
                <div className="about_top_part">
                    <h1>About & Contacts</h1>
                    <p><TiWeatherPartlySunny /> This application represents a weather search system.</p>
                    <p><MdLocationCity /> Search for weather conditions in different cities.</p>
                </div>
                <div className="about_bottom_part">
                    <p className="about_email">
                        <div></div>
                        nik.yanovskyy@gmail.com
                    </p>
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