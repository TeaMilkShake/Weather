import {axios} from 'axios';
const config = {
    baseUrl: ``,
    key: process.env.REACT_APP_GOOGLE_API_KEY
}
const Requests = {
    getCurrentLocationWeather: ()=>{
        axios.get()
    }
}