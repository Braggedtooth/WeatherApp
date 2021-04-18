import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Content from './Content'
import Searchform from './Searchform'




const Main = () => {
    const [weather, setWeather] = useState();
    const api_call = async e => {
        e.preventDefault()
        const API_KEY = '80888145820e593332edff81250e159a'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=${API_KEY}`
        const req = axios.get(url)
        const resp = await req
        setWeather(resp.data.main)

    }
    console.log(weather)

    return (
        <Row>
            <Header />
            <Content>
                <Searchform api_call={api_call} />
            </Content>
        </Row>
    )

}

export default Main