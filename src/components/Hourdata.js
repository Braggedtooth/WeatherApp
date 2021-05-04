import React from 'react'


const HourData = (props) => {


    console.log(props.data)
    /* props.response.slice(0, 6).map((props) => { */
    const { temp, pressure, humidity, weather, } = props.data
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




    //})
}


export default HourData