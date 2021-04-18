import React from 'react'
import Container from 'react-bootstrap/Container'

const Wrapper = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )

}

export default Wrapper