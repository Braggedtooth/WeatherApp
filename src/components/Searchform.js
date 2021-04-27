import React, { useContext } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import Context from '../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'
const Searchform = () => {
    const { api_call } = useContext(Context)
    return (
        <Form onSubmit={api_call}>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text> <FontAwesomeIcon icon={faCity} /></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control name="location" type="text" placeholder="Enter City Name" />
                <InputGroup.Append>
                    <Button type=" submit">Get Weather</Button>
                </InputGroup.Append>
            </InputGroup>
        </Form>

    )

}
export default Searchform