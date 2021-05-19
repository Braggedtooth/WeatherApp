import { Visibility } from '@material-ui/icons'
import React from 'react'
import { Card, Col, Container, ListGroup, ListGroupItem, Row } from 'react-bootstrap'

const HourData = () => {

    const weatherData = JSON.parse(sessionStorage.data)

    const { hourly } = weatherData.data

    const RenderHrdata = () => {
        const hrData = hourly.slice(0, 5).map((hourly,) => {
            const { dt, temp, pressure, humidity, weather, dew_point, visibility } = hourly
            const { icon, main, description, } = weather[0]
            console.log(hourly);
            let unix_timestamp = dt
            // Create a new JavaScript Date object based on the timestamp
            // multiplied by 1000 so that the argument is in milliseconds, not seconds.
            var date = new Date(unix_timestamp * 1000);
            // Hours part from the timestamp
            var hours = date.getHours();
            // Minutes part from the timestamp
            var minutes = "0" + date.getMinutes();
            // Seconds part from the timestamp
            var seconds = "0" + date.getSeconds();

            // Will display time in 10:30:23 format
            var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);


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
                            <ListGroupItem>Dewpoint: {Math.round(dew_point)}°C Visibility:{Math.round(visibility / 1000)}km</ListGroupItem>
                        </Card.Body>
                    </Card>
                </Col>




            )
        })
        return hrData;

    }

    return (

        <Row className="justify-content-center">
            {RenderHrdata()}
        </Row>

    )





}


export default HourData