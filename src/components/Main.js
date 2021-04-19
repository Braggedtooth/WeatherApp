import React, { useState } from 'react'
import Title from './Title'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Content from './Content'
import Searchform from './Searchform'
import Weatherinfo from './WeatherInfo'
import Context from '../Context'






const Main = () => {
    const [weather, setWeather] = useState();
    const [city, setCity] = useState()
    const api_call = async e => {
        e.preventDefault()
        const location = e.target.elements.location.value
        const API_KEY = '80888145820e593332edff81250e159a'
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const req = axios.get(url)
        const resp = await req
        setWeather(resp.data.main)
        setCity(resp.data.name);


    }




    return (
        <Row className="card">
            <Title className="card-header" />
            <Content bg="dark" className="card-body">
                <Context.Provider value={{ api_call, weather, city }}>
                    <Searchform />
                    {weather && <Weatherinfo />}
                </Context.Provider>
            </Content>
        </Row>
    )

}

export default Main