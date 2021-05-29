import React, { useContext, useState } from 'react'
import Context from '../context/Context';
import "../style/toggle.css";

const Togglebtn = () => {
    const { setUnit } = useContext(Context)
    const [toggle, setToggle] = useState(false)
    const Stgl = () => {
        setToggle(!toggle)
        if (!toggle) {
            setUnit({ id: 'imperial', value: '°F' })
        } else setUnit({ id: 'metric', value: '°C' })
    }

    return (



        <div className="toggle-container" onClick={Stgl}>
            <div className={`dialog-button ${toggle ? "" : "disabled"}`}>
                {toggle ? "°F" : "°C"}
            </div>
        </div>



    )
}




export default Togglebtn