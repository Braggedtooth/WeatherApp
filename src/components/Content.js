import React from 'react'
import { Col } from 'react-bootstrap'

const Content = (props) => {

    return (
        <Col xs={12} md={12} className="card-body">

            { props.children}

        </Col>
    )
}
export default Content