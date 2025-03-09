import React from "react";
import { useSelector } from 'react-redux';
import Userprofile from "../../Components/Auth/UserProfile/Index";
import Login from "../../Components/Auth/Login/Index";
import Signup from "../../Components/Auth/SignUp/Index";


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
