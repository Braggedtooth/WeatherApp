import axios from 'axios'

export default async function Weather1call() {
    const coords = await JSON.parse(localStorage.location)
    const { lat, long } = coords

    const API_KEY = process.env.REACT_APP_WEATHER_API_KEY
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`

    if (!sessionStorage.getItem('data')) {
        axios.get(url).then(response => {
            sessionStorage.setItem('data', JSON.stringify(response))
        })

    }
    else return






}

/*  locationdata (hämtar location, skickat lat lon som props) (CR) ->
 FetchLocWeather (hämtar väder skickar data som props) (CR)->
 HourDAta (renderar väderinfon) + weekdata osv
obs conditional rendering efter varje steg utom sista  */


