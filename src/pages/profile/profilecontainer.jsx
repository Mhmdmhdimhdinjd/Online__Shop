import React from "react";
import { useSelector } from 'react-redux';
import Userprofile from "../../Components/auth/userprofile/Userprofile";
import Login from "../../Components/auth/Login/Index";
import Signup from "../../Components/auth/signup/index";


const Profilecontainer = () => {

    const storeduser = useSelector((state) => state.auth.user);
    const logeduser = useSelector((state) => state.auth.logeduser);

    if (!storeduser) {
        return <Signup />;
    } else if (!logeduser) {
        return <Login/>;
    }

    return(
        <Userprofile/>
    )
    
}

export default Profilecontainer
