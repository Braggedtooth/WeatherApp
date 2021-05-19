import React, { useState } from 'react'
import axios from 'axios'
import Context from '../context/Context'
import Err from './Err'
import Navigationbar from './Navigationbar'
import Tabs from './Tabs'
import Coordinates from './Coordinates'
import { Container } from 'react-bootstrap'

const Main = () => {
    Coordinates()

    const [weather, setWeather] = useState();
    const [city, setCity] = useState()
    const [weatherTemp, setWeatherTemp] = useState();
    const [unit, setUnit] = useState({ id: 'metric', value: '°C' })
    const [err, setErr] = useState()
    const [querry, setQuerry] = useState('')
    const { id, value } = unit


    const api_call = async (e) => {
        e.preventDefault()
        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${querry}&appid=${API_KEY}&units=${id}`
        if (!querry) { setErr('Please Enter A Valid City.'); return setWeather(null) };
        const req = axios.get(url)
        const resp = await req
        setWeather(resp.data.main)
        setCity(resp.data.name);
        setWeatherTemp(Math.round(resp.data.main.temp))
        setErr(null)


    }

    return (

        <Container className="mw-100 p-0">
            <Context.Provider value={{ api_call, weather, city, weatherTemp, setUnit, unit, setQuerry, querry, value, }}>
                <Navigationbar />
                <Tabs />
            </Context.Provider>
            {err && <Err error={err} />}
        </Container>

    )

}

export default Main