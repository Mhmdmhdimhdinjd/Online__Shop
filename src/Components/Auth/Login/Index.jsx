import { Box, Grid, Button, InputLabel, createTheme, ThemeProvider, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import loginimg from '../../../Assets/Images/login.jpg';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { object, string } from 'yup';
import { useDispatch } from "react-redux";
import LoginQuery__handler from "../../../ReactQuery/LoginHandler"
import { useNavigate } from "react-router-dom";
import { loginUser } from '/src/Redux/Reducers/AuthReducer';


const LoginComponent = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    const { mutate, isLoading } = LoginQuery__handler()

    const [Loginerror, setLoginerror] = useState(null)



    const Submited = (data) => {

        mutate(data, {
            onSuccess: (Reference) => {
                if (Reference.status === 201) {
                    console.log('ُLogin successed by backend')
                    if (storedUser.username === data.username && storedUser.password === data.password) {
                        dispatch(loginUser(storedUser));
                        let redirectPath = localStorage.getItem('userredirect');
                        navigate(redirectPath || '/Online__Shop')
                    } else {
                        setLoginerror('نام کاربری یا رمز عبور نادرست است');
                    }
                }
            },
        })

    }

    const theme = createTheme({
        components: {
            MuiInputLabel: {
                styleOverrides: {
                    root: {
                        color: 'white',
                        fontFamily: 'gandom',
                        marginTop: '1rem'
                    }
                }
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: '20px',
                        fontFamily: 'gandom',
                        margin: '1rem'
                    }
                }
            }
        }
    });

    let userSchema = object({
        username: string().required('ورود این مقادیر الزامیست'),
        password: string().required('ورود این مقادیر الزامیست')
    });


    const { handleSubmit, control, reset, formState: { errors }, getValues } = useForm({
        resolver: yupResolver(userSchema),
        defaultValues: {
            username: "",
            password: ""
        }
    });

    useEffect(() => {
        setLoginerror(null)
    }
        , [getValues('username'), getValues('password')])

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ pb: 16, maxWidth: '94rem', width: '100%', position: 'relative' }}>
                <div className="circle"></div>
                <Typography fontFamily={'gandom'} color="white" fontSize={32} textAlign={'center'} sx={{ textShadow: '0 0 4px rgba(0, 0, 0, 0.9)' }} my={6}>ورودبه برنج نی نی</Typography>
                <Grid container sx={{ width: '80%', height: '20rem', mx: 'auto', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(30px)', border: '#fff solid 4px', borderRadius: '2rem', overflow: 'hidden' }}>
                    <Grid item xs={10} sm={8}>
                        <form style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} onSubmit={handleSubmit(Submited)}>
                            <InputLabel>نام کاربری</InputLabel>
                            <Controller
                                name="username"
                                control={control}
                                render={({ field }) =>
                                    <input disabled={isLoading} className="login__input" {...field} label="email" variant="outlined" />
                                }
                            />
                            {errors.username && <Typography fontFamily={'gandom'} fontSize={12} color="black">{errors.username.message}</Typography>}
                            <InputLabel>رمز عبور</InputLabel>
                            <Controller
                                name="password"
                                control={control}
                                render={({ field }) =>
                                    <input type="password" disabled={isLoading} className="login__input" {...field} label="address" variant="outlined" />
                                }
                            />
                            {errors.password && <Typography fontFamily={'gandom'} fontSize={12} color="black">{errors.password.message}</Typography>}
                            {Loginerror && <Typography fontFamily={'gandom'} fontSize={12} color="black">{Loginerror}</Typography>}
                            <Button size="large" variant="contained" sx={{ width: '50%', color: 'black', backgroundColor: '#fff' }} type="submit">تایید</Button>
                        </form>
                    </Grid>
                    <Grid item xs={4} sx={{ backgroundColor: 'white', height: '100%', display: { xs: 'none', sm: 'flex' }, alignItems: 'center' }}>
                        <img style={{ width: '100%' }} src={loginimg} alt="login img" />
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
}

export default LoginComponent;
