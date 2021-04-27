import PropTypes from "prop-types";
import React, { useState } from "react";

import "../style/toggle.css";


const ToggleBtn = (props) => {
    const { selected, toggleSelected } = useState(true);



    return (
        <div className="toggle-container" onClick={toggleSelected}>
            <div className={`dialog-button ${selected ? "" : "disabled"}`}>
                {selected ? "YES" : "NO"}
            </div>
        </div>
    );

}
ToggleBtn.propTypes = {
    selected: PropTypes.bool.isRequired,
    toggleSelected: PropTypes.func.isRequired
};

export default ToggleBtn

