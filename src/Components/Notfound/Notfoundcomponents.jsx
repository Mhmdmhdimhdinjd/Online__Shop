import React from "react";
import { Typography, Box, Button} from "@mui/material";
import {Link} from "react-router-dom";


const Notfoundcomponent = () => {
    return (
        <Box sx={{ height: '400px', width: 'fitContent', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
                component="h1"
                sx={{
                    textAlign: 'center',
                    color: 'red',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    fontFamily: 'gandom'
                }}
            >
                کجا میخوای بری؟
            </Typography>
            <Link to='/onlineshop-nini/home'>
                <Button variant="contained" color="warning" size="large" >بیا بریم خونه</Button>
            </Link>
        </Box>
    );
}

export default Notfoundcomponent;
