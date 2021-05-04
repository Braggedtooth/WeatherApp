/*
import React, { useEffect, useState, } from 'react';

import axios from 'axios'
import HourData from './Hourdata';


const LocationData = () => {

    //function GetLocationData() {
    const [position, setPosition] = useState(null);
    const [response, setResponse] = useState(null)
    console.log("Hej från locationda")
    useEffect(() => {
        if (!navigator.geolocation) return
        navigator.geolocation.getCurrentPosition((position) => {
            setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
        }, () => { })
    }, [])


    useEffect(() => {
        if (!position) return
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${position.lat}&lon=${position.lng}&appid=${API_KEY}`
        axios.get(url).then(response => {

            setResponse(response.data)


        })
    }, [position])
    const { timezone, current, minutely, hourly, daily } = response
    const hrweather = () => {
        if (!hourly) return
        const hourlyReport = hourly.slice(0, 6).map((data) => {
            const { temp, pressure, humidity, weather, } = data

            const { icon, main, description, } = weather[0]                      /*  hourly.map((hourly, data) =><li key={data} > day {data} {hourly.temp}</li>


            const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`


        })
    }
    hrweather();



    return (response ? <HourData {...response} /> : null)
    // locationdata (hämtar location, skickat lat lon som props) (CR) -> FetchLocWeather (hämtar väder skickar data som props) (CR)-> HourDAta (renderar väderinfon) + weekdata osv
    // obs conditional rendering efter varje steg utom sista
    //}
}
export default LocationData


 */