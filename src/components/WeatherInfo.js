import React, { useContext } from 'react'
import { Card, Button } from 'react-bootstrap';
import Context from '../Context'


const Weatherinfo = () => {
    const { weather, city, switchMeasurements, weatherTemp, measurement, tempscale } = useContext(Context)
    const { humidity, pressure } = weather







    return (
        <Card className="p-5 mt-lg-2">
            <div className=" d-flex justify-content-between"> <p>Weather Today in</p> <span>{city}</span></div>
            <div className=" d-flex justify-content-between"> <p>Temperature</p> <span >{tempscale ?? weatherTemp}{measurement}</span></div>
            <div className=" d-flex justify-content-between"> <p>Wind Pressure</p> <span>{pressure}</span></div>
            <div className=" d-flex justify-content-between"> <p>humidity</p> <span>{humidity}</span></div>
            <div className=" d-flex justify-content-between"> <p>Sunrise and sunset</p> <span>Sunrise</span></div>
            <div>
                <Button className=" col-6" variant="success">Get weather from your location</Button>
                <Button className=" col-6" variant="warning" onClick={switchMeasurements} >Change Temperature scale </Button>
            </div>


        </Card>
    )
}

export default Weatherinfo