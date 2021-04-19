import React, { useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import Context from '../Context'

const Searchform = () => {
    const { api_call } = useContext(Context)
    return (
        <Form onSubmit={api_call} className="row">
            <Form.Control name="location" type="text" placeholder="Enter City Name" className="col" />
            <Button type=" submit" className="col-md-2 col-sm">Get Weather</Button>

        </Form>

    )

}
export default Searchform