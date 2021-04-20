import React, { useState } from 'react'
import Title from './Title'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Content from './Content'
import Searchform from './Searchform'
import Weatherinfo from './WeatherInfo'
import Context from '../Context'
import Err from './Err'







const Main = () => {
    const [weather, setWeather] = useState();
    const [city, setCity] = useState()
    const [weatherTemp, setWeatherTemp] = useState();
    const [measurement, setmeasurement] = useState('°C')

    const [err, setErr] = useState()


    const api_call = async e => {
        e.preventDefault()
        const location = e.target.elements.location.value
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        if (!location) { setErr('Please Enter A Valid City.'); return setWeather(null) };
        const req = axios.get(url)
        const resp = await req
        setWeather(resp.data.main)
        setCity(resp.data.name);
        const vTemp = (Math.round(resp.data.main.temp))
        setWeatherTemp(vTemp)
        setmeasurement('°C') /* WACKY SOLUTION TO A WACKY PROBLEM INVESTIGATE FURTHER */
        setErr(null)
        const weatherInfo = resp.data.weather
        console.log(weatherInfo)

    }









    return (
        <Row className="card">
            <Title className="card-header" />
            <Content bg="dark" className="card-body">
                <Context.Provider value={{ api_call, weather, city, weatherTemp, measurement, setmeasurement }}>
                    <Searchform />

                    {weather && <Weatherinfo />}

                </Context.Provider>
            </Content>
            {err && <Err error={err} />}
        </Row>
    )

}

export default Main