import React , {useEffect}from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from '../pages/profile/Profile';


const PrivateRoute = ({ children }) => {

    const location = useLocation()
    const storeduser = useSelector((state) => state.auth.user);
    const logeduser = useSelector((state) => state.auth.logeduser);
    useEffect(() => { 
        localStorage.setItem('userredirect', location.pathname); 
    }, [location.pathname]);


    if (!storeduser) {
        return <Profile />
    } else if (!logeduser) {
        return <Profile />;
    }

    return children;
};

export default PrivateRoute;
