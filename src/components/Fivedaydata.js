import Renderdata from './Renderdata.js'
import React from 'react'
import { Row } from 'react-bootstrap'

const HourData = () => {

    const weatherData = JSON.parse(sessionStorage.data)
    const { daily } = weatherData.data



    return (

        <Row className="justify-content-center">
            {Renderdata(daily)}
        </Row>

    )





}


export default HourData