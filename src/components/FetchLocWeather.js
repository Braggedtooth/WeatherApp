import axios from 'axios'
import React, { useEffect, useState } from 'react'



const FetchLocWeather = (props) => {
    const { lat, lng } = props.location

    const [response, setResponse] = useState(null)
    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY


    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${API_KEY}`
    useEffect(() => { })
    axios.get(url).then(response => {
        setResponse(response.data.hourly)


    })

    return (
        <>
            {response.temp}
        </>
    )

}

/* <HourData data={response} /> */

/*  locationdata (hämtar location, skickat lat lon som props) (CR) ->
 FetchLocWeather (hämtar väder skickar data som props) (CR)->
 HourDAta (renderar väderinfon) + weekdata osv
obs conditional rendering efter varje steg utom sista  */
export default FetchLocWeather

