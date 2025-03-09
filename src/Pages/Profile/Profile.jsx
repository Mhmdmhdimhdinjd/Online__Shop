import React from "react";
import Footer from "../../Components/Footer";
import Navbar from "../../Components/Navbar/Index";
import Profilecontainer from "./profileContainer";
import { Box } from "@mui/material";

const Profile = () => {


    return (
        <Box
        sx={{ height:'100vh' , display:'flex' , flexDirection:'column' , justifyContent:'space-between'}}
        >

            <Navbar />

            <Box sx={{mx:'auto'}}>
                <Profilecontainer />
            </Box>

            <Footer />

        </Box>
    )
}

export default Profile