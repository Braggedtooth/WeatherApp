import React, { useContext } from 'react'
import { Form, InputGroup } from 'react-bootstrap'
import Context from '../context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCity } from '@fortawesome/free-solid-svg-icons'
const Searchform = () => {

    const { api_call, setQuerry } = useContext(Context)

    const handleCall = (e) => {
        e.preventDefault()
        setQuerry(e.target.value)

    }
    return (
        <Form onSubmit={api_call} onChange={handleCall}>
            <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text> <FontAwesomeIcon icon={faCity} /></InputGroup.Text>
                </InputGroup.Prepend>
                <Form.Control name="location" type="text" placeholder="Enter City Name" />
            </InputGroup>
        </Form>

    )

}
export default Searchform