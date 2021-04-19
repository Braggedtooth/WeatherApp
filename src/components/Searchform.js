import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Searchform = (props) => {
    return (
        <Form onSubmit={props.api_call} className="row">

            <Form.Control type="text" placeholder="Enter City Name" className="col" />
            <Button type=" submit" className="col-md-2 col-sm">Get Weather</Button>

        </Form>

    )

}
export default Searchform