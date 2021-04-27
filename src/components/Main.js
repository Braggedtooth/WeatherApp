import React, { useState } from 'react'
import Title from './Title'
import axios from 'axios'
import Row from 'react-bootstrap/Row'
import Content from './Content'
import Searchform from './Searchform'
import Weatherinfo from './WeatherInfo'
import Context from '../context/Context'
import Err from './Err'









const Main = () => {
    const [weather, setWeather] = useState();
    const [city, setCity] = useState()
    const [weatherTemp, setWeatherTemp] = useState();
    const [measurement, setmeasurement] = useState('°C')
    const [unit, setUnit] = useState(weatherTemp)
    const [err, setErr] = useState()
    const [toggle, setToggle] = useState(true)
    const trigger = () => { setToggle(!toggle) }

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
        setWeatherTemp(Math.round(resp.data.main.temp))
        setmeasurement('°C')
        setUnit(weatherTemp) /* WACKY SOLUTION TO A WACKY PROBLEM INVESTIGATE FURTHER */
        setErr(null)
        const weatherInfo = resp.data.weather
        console.log(weatherInfo)

    }











    return (
        <Row className="card">

            <Context.Provider value={{ api_call, weather, city, weatherTemp, measurement, setmeasurement, setUnit, unit, trigger, toggle }}>
                <Title className="card-header" />
                <Content bg="dark" className="card-body">

                    <Searchform />

                    {weather && <Weatherinfo />}


                </Content>

            </Context.Provider>


            {err && <Err error={err} />}
        </Row>
    )

}

export default Main