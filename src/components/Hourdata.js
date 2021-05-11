import React from 'react'

const HourData = () => {

    const weatherData = JSON.parse(sessionStorage.data)

    const { hourly } = weatherData.data

    const RenderHrdata = () => {
        const hrData = hourly.slice(0, 6).map((hourly) => {
            const { temp, pressure, humidity, weather, } = hourly
            const { icon, main, description, } = weather[0]

            const iconUrl = `https://openweathermap.org/img/wn/${icon}.png`

            return (

                <ul>
                    <li >{temp}</li>
                    <li >{pressure}</li>
                    <li >{humidity}</li>
                    <li >{main}</li>
                    <li >{description}</li>
                    <li ><img src={iconUrl} alt="weather icon" /></li>

                </ul>)
        })
        return hrData;

    }

    return (

        <div> {RenderHrdata()}</div>

    )





}


export default HourData