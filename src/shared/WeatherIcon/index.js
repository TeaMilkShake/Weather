import {useState, useEffect} from 'react'
import {FaCloudSun, FaCloudSunRain, FaCloudShowersHeavy, FaCloud, FaSun} from 'react-icons/fa'
import {GiSnowing} from 'react-icons/gi'
import {RiThunderstormsFill} from 'react-icons/ri'
import {RiMistFill} from 'react-icons/ri'
const WeatherIcon = (props) =>{
    const [icon,setIcon] = useState("")

    useEffect(()=>{
        switch (props.weather) {
            case "Clouds":
                props.weatherDescription === 'few clouds' ? setIcon(FaCloudSun) : setIcon(FaCloud)
                setIcon(FaCloud)
                break;
            case "Mist":
                props.weatherDescription === 'few clouds' ? setIcon(FaCloudSun) : setIcon(FaCloud)
                setIcon(FaCloud)
                break;
            case "Clear":
                setIcon(FaSun)
                break;
            case "Snow":
                setIcon(GiSnowing)
                break;
            case "Rain":
                props.weatherDescription === 'light rain' ? setIcon(FaCloudSunRain) : setIcon(FaCloudShowersHeavy)
                break;
            case "Drizzle":
                setIcon(FaCloudShowersHeavy)
                break;
            case "Thunderstorm":
                setIcon(RiThunderstormsFill)
                break;
            default:
                setIcon(RiMistFill)
                break;
        }
    },[props.weather, props.weatherDescription])

    return(
        icon
    )
}

export default WeatherIcon