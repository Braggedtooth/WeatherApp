export default function Coordinates() {

    const error = (err) => {
        console.warn(`ERROR ${err.code}): ${err.message}`)
    }

    const success = (pos) => {
        const myPos = pos.coords;
        const { latitude, longitude } = myPos
        const loc = { lat: latitude, long: longitude }
        localStorage.setItem('location', JSON.stringify(loc))

    }

    navigator.geolocation.getCurrentPosition(success, error,)
    return {
        success,
        error,
    }
}
