import React from 'react'
import { Row } from 'react-bootstrap'
import RenderData from '../controllers/Render5day.js'

const HourData = () => {
    if (!sessionStorage.getItem('data')) return
    const weatherData = JSON.parse(sessionStorage.data)
    const { daily } = weatherData.data

    return (

        <Row className="justify-content-center">
            {RenderData(daily)}
        </Row>

    )





}


export default HourData