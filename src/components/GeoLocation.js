
import React, { useEffect, useState, } from 'react';

import axios from 'axios'



const Geolocation = (props) => {
    const [position, setPosition] = useState(null);
    const [msg, setMsg] = useState(null);
    const [response, setResponse] = useState([])

    useEffect(() => {



        if (!navigator.geolocation) {
            setMsg('Geolocation is not supported by your browser');
        } else {
            setMsg('Locating...');
            navigator.geolocation.getCurrentPosition((position) => {
                setMsg(null);
                setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });



            }, () => {
                setMsg('Unable to retrieve your location');
            })


        }

    }, [])


    useEffect(() => {
        if (!position) return
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.lat}&lon=${position.lng}&appid=${API_KEY}`
        axios.get(url).then(response => {
            /* const { timezone } =  */
            setResponse(response.data)


        })
    }, [position])
    const { timezone, /* current , minutely ,*/ hourly /* daily */ } = response
    const hrweather = () => {
        if (!hourly) return
        const hourlyReport = /* hourly.map((hourly, data) =>
            <li key={data} > day {data} {hourly.temp}</li>
        ) */
            hourly.slice(0, 6).map((data) => {
                const { temp, pressure, humidity, weather, } = data

                const { icon, main, description, } = weather[0]

                const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`

                return (

                    <ul>

                        {data && <li key={'0'}>{temp}</li>}
                        {data && <li key={1}>{pressure}</li>}
                        {data && <li key={2}>{humidity}</li>}
                        {data && <li key={3}>{main}</li>}
                        {data && <li key={4}>{description}</li>}
                        {data && <li key={5}> <img src={iconUrl} alt="weather icon" /></li>}

                    </ul>)




            })

        return hourlyReport

    }



    return (
        <>
            <div> {timezone}</div>
            <div>{msg}</div>
            <div> {hrweather()}</div>
        </>




    )
}



export default Geolocation;