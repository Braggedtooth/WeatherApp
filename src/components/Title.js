import React from 'react'
import { Card } from 'react-bootstrap'
import Unitbtn from './Unitbtn'







const Title = () => {
    return (
        <>

            <Card.Header className="card-title text-center justify-content-between d-flex">
                <p>Enter a city name to get weather information </p>
                <Unitbtn />
            </Card.Header>

        </>
    )
}




export default Title