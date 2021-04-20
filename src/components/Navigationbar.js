import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Toggle from './Toggle'


const Navigationbar = () => (
    <>
        <Navbar bg="dark" className=" mb-md-5 justify-content-between">
            <Navbar.Brand href="/">Weather App</Navbar.Brand>
            <Toggle />
        </Navbar>

    </>
)



export default Navigationbar