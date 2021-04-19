import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap';


const Weatherinfo = ({ weather }) => {
    const { temp_max, humidity, pressure } = weather
    const [temperature, setTemperature] = useState('°C')
    const [tempscale, setTempscale] = useState(Math.round(temp_max))
    const switchTemp = (e) => {
        e.preventDefault()
        if (temperature === '°C') {
            setTemperature('°F')
            setTempscale(Math.round(temp_max * 1.8 + 32))

        } else {
            setTemperature('°C')
            setTempscale(Math.round(temp_max))

        }


    }




    return (
        <Card>
            <div className=" d-flex justify-content-between"> <p>Weather Today in</p> <span>Stocholm</span></div>
            <div className=" d-flex justify-content-between"> <p>Temperature</p> <span>{tempscale}{temperature}</span></div>
            <div className=" d-flex justify-content-between"> <p>Wind Pressure</p> <span>{pressure}</span></div>
            <div className=" d-flex justify-content-between"> <p>humidity</p> <span>{humidity}</span></div>
            <div className=" d-flex justify-content-between"> <p>Sunrise and sunset</p> <span>Sunrise</span></div>
            <Button className="is-success">Get weather from your location</Button>
            <Button onClick={switchTemp}>Change</Button>

        </Card>
    )
}

export default Weatherinfo