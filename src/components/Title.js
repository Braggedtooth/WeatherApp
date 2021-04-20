import React from 'react'
import { Card } from 'react-bootstrap'
import Togglebtn from './Togglebtn'




const Title = () => {

    return (<>

        <Card.Header className="card-title text-center justify-content-between d-flex"> Enter a city name to get weather information {<Togglebtn />} </Card.Header>


    </>
    )
}



export default Title