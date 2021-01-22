import React, {useState, useEffect, useRef} from 'react'

const Time = () =>{
    const [time, setTime] = useState(new Date().toLocaleTimeString())
    let savedCount = useRef()
    
    useEffect(() => {
        let id = setTimeout(() =>{
            savedCount.current = new Date().toLocaleTimeString();
            setTime(savedCount.current)
        }, 1000);
        return () => clearInterval(id);
    });
    return(
        <p className="home_time">{time.substring(0, time.length - 3)}</p>
    )
}
//Explenation
//https://overreacted.io/making-setinterval-declarative-with-react-hooks/
//https://leewarrick.com/blog/react-use-effect-explained/
//https://dmitripavlutin.com/react-hooks-mistakes-to-avoid/

export default Time