import React from 'react'
import { Card } from 'react-bootstrap'

const Err = ({ error }) => {
    return (
        <Card.Footer bg="danger" className="text-center text-danger"> {error}</Card.Footer>

    )

}

export default Err