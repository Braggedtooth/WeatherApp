import React from 'react'
import { Button, Form } from 'react-bootstrap'

const Searchform = (props) => {
    return (
        <Form onSubmit={props.api_call} className="row">


            <Form.Control type="text" placeholder="Enter City Name" className="col" />
            <Button type=" submit" className="col-2">Get Weather</Button>


        </Form>

    )

}
export default Searchform