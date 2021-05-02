import React, { useState } from 'react'
import Title from './Title'
import axios from 'axios'
import Content from './Content'
import Searchform from './Searchform'
import Weatherinfo from './WeatherInfo'
import Context from '../context/Context'
import Err from './Err'
import Navigationbar from './Navigationbar'
import { Container } from 'react-bootstrap'
const Main = () => {
    const [weather, setWeather] = useState();
    const [city, setCity] = useState()
    const [weatherTemp, setWeatherTemp] = useState();
    const [unit, setUnit] = useState(weatherTemp)
    const [err, setErr] = useState()
    const [querry, setQuerry] = useState('')


    const api_call = async (e) => {
        e.preventDefault()

        const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${querry}&appid=${API_KEY}&units=metric`
        if (!querry) { setErr('Please Enter A Valid City.'); return setWeather(null) };
        const req = axios.get(url)
        const resp = await req
        setWeather(resp.data.main)
        setCity(resp.data.name);
        setWeatherTemp(Math.round(resp.data.main.temp))
        setUnit(weatherTemp) /* WACKY SOLUTION TO A WACKY PROBLEM INVESTIGATE FURTHER */
        setErr(null)
        const weatherInfo = resp.data.weather
        console.log(weatherInfo)

    }



    return (
        <div className="container-fluid">
            <Context.Provider value={{ api_call, weather, city, weatherTemp, setUnit, unit, setQuerry, querry }}>
                <Navigationbar />
                <Title className="card-header" />
                <Content bg="dark" className="card-body">
                    {weather && <Weatherinfo />}
                </Content>
            </Context.Provider>
            {err && <Err error={err} />}
        </div>
    )

}

export default Main