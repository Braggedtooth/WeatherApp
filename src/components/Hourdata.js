import Renderdata from '../controllers/Renderdata.js'
import React from 'react'
import { Row } from 'react-bootstrap'

const HourData = () => {
    if (!sessionStorage.getItem('data')) return
    const weatherData = JSON.parse(sessionStorage.data)
    const { hourly, current } = weatherData.data
    console.log(current);



    return (

        <Row className="justify-content-center">
            {Renderdata(hourly)}
        </Row>

    )





}


export default HourData