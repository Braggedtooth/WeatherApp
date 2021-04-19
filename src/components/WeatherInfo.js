import React, { useState, useContext } from 'react'
import { Card, Button } from 'react-bootstrap';
import Context from '../Context'


const Weatherinfo = () => {
    const { weather, city } = useContext(Context)
    const { temp, humidity, pressure } = weather
    const [temperature, setTemperature] = useState('°C')
    const [tempscale, setTempscale] = useState(Math.round(temp))

    const switchTemp = (e) => {
        e.preventDefault()
        if (temperature === '°C') {
            setTemperature('°F')
            setTempscale(Math.round(temp * 1.8 + 32))

        } else {
            setTemperature('°C')
            setTempscale(Math.round(temp))

        }


    }




    return (
        <Card className="p-4 mt-lg-2">
            <div className=" d-flex justify-content-between"> <p>Weather Today in</p> <span>{city}</span></div>
            <div className=" d-flex justify-content-between"> <p>Temperature</p> <span>{tempscale}{temperature}</span></div>
            <div className=" d-flex justify-content-between"> <p>Wind Pressure</p> <span>{pressure}</span></div>
            <div className=" d-flex justify-content-between"> <p>humidity</p> <span>{humidity}</span></div>
            <div className=" d-flex justify-content-between"> <p>Sunrise and sunset</p> <span>Sunrise</span></div>
            <div>
                <Button className=" col-6" variant="success">Get weather from your location</Button>
                <Button className=" col-6" variant="warning" onClick={switchTemp}>Change Temperature scale </Button>
            </div>


        </Card>
    )
}

export default Weatherinfo