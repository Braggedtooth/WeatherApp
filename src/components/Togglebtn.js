import React, { useState } from 'react'
import "../style/toggle.css";






const Togglebtn = () => {

    const [toggle, setToggle] = useState(false)
    const Stgl = e => {

        setToggle(!toggle)
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