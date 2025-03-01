import React from "react";
import Notfoundcomponent from "../../Components/Notfound/Notfoundcomponents";
import { Box } from "@mui/material";

const Notfoundcontainer = () => {

    return (

        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh'
            }}>
            <Notfoundcomponent />
        </Box>

    )

}


export default Notfoundcontainer