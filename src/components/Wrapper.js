import Box from '@material-ui/core/Box'

import React from 'react'


const Wrapper = (props) => {
    return (
        <Box className="min-vh-100">
            {props.children}
        </Box>

    )

}

export default Wrapper