import React, { useContext } from 'react'

import Context from '../context/Context'
import '../style/toggle.css'



const Unitbtn = (props) => {
    const { toggle, trigger, measurement, setmeasurement, weatherTemp, setUnit } = useContext(Context)
    const onToggle = () => {
        trigger()
        if (toggle) {
            setmeasurement('°C' ?? '°F')
            if (measurement === '°F') {
                setUnit(Math.round(weatherTemp + 52 * 1.8))
            }
        }
    }




    return (


        <div onClick={onToggle} className={`toggle ${toggle ? 'toggle--checked' : ''}`} >
            <div className="toggle-container">
                <div className="toggle-check">
                    <strong> ℃ </strong>
                </div>
                <div className="toggle-uncheck">
                    <strong > ℉ </strong>
                </div>
            </div>
            <div className="toggle-circle"></div>
            <input className="toggle-input" type="checkbox" />
        </div>

    )



}
export default Unitbtn