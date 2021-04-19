import React, { useState } from 'react'
import Title from './Title'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Content from './Content'
import Searchform from './Searchform'
import Weatherinfo from './WeatherInfo'





const Main = () => {
    const [weather, setWeather] = useState();
    const api_call = async e => {
        e.preventDefault()
        const API_KEY = '80888145820e593332edff81250e159a'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Bali&appid=${API_KEY}&units=metric`
        const req = axios.get(url)
        const resp = await req
        setWeather(resp.data.main)

    }


    return (
        <Row className="card">
            <Title className="card-header" />
            <Content bg="dark" className="card-body">
                <Searchform api_call={api_call} />
                {weather && <Weatherinfo weather={weather} />}

            </Content>
        </Row>
    )

}

export default Main