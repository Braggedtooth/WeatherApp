export default function Coordinates() {
    const save = (val) => {
        if (!localStorage.getItem('location')) {
            localStorage.setItem('location', JSON.stringify(val))
        } else return
    }

    const error = (err) => {
        console.warn(`ERROR ${err.code}): ${err.message}`)

    }

    const success = (pos) => {
        const myPos = pos.coords;
        const { latitude, longitude } = myPos
        const loc = { lat: latitude, long: longitude }
        return (
            save(loc)
        )


    }

    navigator.geolocation.getCurrentPosition(success, error,)


}
