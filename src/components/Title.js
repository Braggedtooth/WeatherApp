import React from 'react'
import { Card } from 'react-bootstrap'
import Togglebtn from '../controllers/Togglebtn'

const Title = () => {


    return (
        <>

            <Card.Header className="card-title text-center justify-content-between d-flex">
                <p>Enter a city name to get weather information </p>

                {<Togglebtn />}

            </Card.Header>
        </>

    )
}




export default Title