import Calculatedate from '../controllers/Calculatedate.js'
import React from 'react'
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap'

export default function RenderData(array) {

    const { dt, temp, pressure, humidity, weather, dew_point, sunrise, sunset } = array
    const { icon, main, description, } = weather[0]

    const formattedTime = Calculatedate(dt)
    const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
    const cStyle = {
        display: 'inline-flex',
        justifyContent: 'center',
    }

    return (


        <Col sm style={cStyle}>
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={iconUrl} />
                <Card.Body>
                    <Card.Title>{formattedTime}</Card.Title>
                    <Card.Subtitle>{main}, {description} </Card.Subtitle>

                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Temperature: {Math.round(temp)}°C</ListGroupItem>
                    <ListGroupItem>Wind pressure: {pressure}hPa</ListGroupItem>
                    <ListGroupItem>Humidity: {humidity}%</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <ListGroupItem>Dewpoint: {Math.round(dew_point)}°C</ListGroupItem>
                    <ListGroupItem>Sunrise : {Calculatedate(sunrise)} </ListGroupItem>
                    <ListGroupItem>Sunset : {Calculatedate(sunset)} </ListGroupItem>
                </Card.Body>
            </Card>
        </Col>




    )




}