import React, { useState, useEffect } from "react";
import FetchLocWeather from './FetchLocWeather'

const LocationDatata = () => {

    const [position, setPosition] = useState()

    if (!navigator.geolocation) return alert('Pls Give access to geolocation')
    navigator.geolocation.getCurrentPosition((position) => {
        setPosition({ lat: position.coords.latitude, lng: position.coords.longitude });
    }, () => { })







    return (
        <div >
            {  position && position.lng}
            <button onClick={() => { console.log(position) }}> Press</button>

            { position ? <FetchLocWeather location={position} /> : null}
        </div>

    )
}

export default LocationDatata

