import React, { useContext, useState } from 'react'
import styles from '../style/Toggle.module.css'
import Context from '../Context'

const ToggleBtn = () => {

    const [toggle, setToggle] = useState(true)


    const trigger = () => {
        setToggle(!toggle)

    }



    return (
        <>

            <label className={styles.switch} onChange={trigger}><input type="checkbox" /><span className={`${styles.round} ${styles.slider}`} /> </label>

        </>

    )
}
export default ToggleBtn
