import React from 'react'
import { Card, Button } from 'react-bootstrap';

const Weatherinfo = ({ weather }) => {

    const { temp, humidity, pressure } = weather

    return (
        <Card>
            <div className=" d-flex justify-content-between"> <p>Weather Today in</p> <span>Stocholm</span></div>
            <div className=" d-flex justify-content-between"> <p>Temperature</p> <span>{temp}</span></div>
            <div className=" d-flex justify-content-between"> <p>Wind Pressure</p> <span>{pressure}</span></div>
            <div className=" d-flex justify-content-between"> <p>humidity</p> <span>{humidity}</span></div>
            <div className=" d-flex justify-content-between"> <p>Sunrise and sunset</p> <span>Sunrise</span></div>
            <Button className="is-success">Get weather from your location</Button>

        </Card>
    )
}

export default Weatherinfo