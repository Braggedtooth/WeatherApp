import RenderData from '../controllers/RenderCurrent'
import React from 'react'
import { Row } from 'react-bootstrap'

const CurrentData = () => {
    if (!sessionStorage.getItem('data')) return
    const weatherData = JSON.parse(sessionStorage.data)
    const { current } = weatherData.data

    return (

        <Row className="justify-content-center">
            {RenderData(current)}
        </Row>

    )





}


export default CurrentData