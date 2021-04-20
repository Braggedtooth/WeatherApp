import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Togglebtn from './Togglebtn'


const Navigationbar = () => (
    <>
        <Navbar bg="dark" className=" mb-md-5 justify-content-between">
            <Navbar.Brand href="/">Weather App</Navbar.Brand>
            <Togglebtn />
        </Navbar>

    </>
)



export default Navigationbar