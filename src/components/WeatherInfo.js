import React, { useContext, useEffect } from 'react'
import { Card, Button } from 'react-bootstrap';
import Context from '../context/Context'



const Weatherinfo = () => {
    const { weather, city, weatherTemp, measurement, unit } = useContext(Context)

    const { humidity, pressure } = weather







    return (
        <Card className="p-2 mt-sm-3 mt-md-3 ">
            <div className=" d-flex justify-content-between"> <p>Weather Today in</p> <span>{city}</span></div>
            <div className=" d-flex justify-content-between"> <p>Temperature</p> <span >{unit ?? weatherTemp}{measurement}</span></div>
            <div className=" d-flex justify-content-between"> <p>Wind Pressure</p> <span>{pressure}</span></div>
            <div className=" d-flex justify-content-between"> <p>Humidity</p> <span>{humidity}</span></div>
            <div className=" d-flex justify-content-between"> <p>Sunrise and sunset</p> <span>Sunrise</span></div>
            <div className=" d-flex align-content-center justify-content-center">
                <Button variant="success">Get weather from your location</Button>

            </div>


        </Card>
    )
}

export default Weatherinfo