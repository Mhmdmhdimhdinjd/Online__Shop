import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ProductGrid from "../../Components/shoppigbasket/ShoppingBasketGrid/ShoppingBasketGrid";
import Navbar from "../../Components/Navbar/Index";
import Footer from "../../Components/Footer";
import { Box, Container, Button, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { clearCart } from "../../Redux/Reducers/CartReducer";
import { useNavigate } from "react-router-dom";



const Shoppingbasketcontainer = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate()

    const cartItems = useSelector((state) => state.cart.items);

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>

            <Navbar />

            <Container>

                <ProductGrid cartItem={cartItems} />

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        gap: 4,
                        mb: 10,
                    }}
                >

                    {cartItems.length !== 0 ?

                        <>
                            <Button
                                variant="contained"
                                color="error"
                                onClick={handleClickOpen}
                                sx={{ fontFamily: 'gandom' }}
                            >
                                خالی کردن سبد خرید
                            </Button>


                            <Button
                                variant="contained"
                                color="primary"
                                // onClick={() => dispatch()}
                                sx={{ fontFamily: 'gandom' }}
                            >
                                تکمیل خرید
                            </Button>

                        </>
                        :

                        <Typography
                            component="h1"
                            onClick={() => navigate('/Online__Shop/Home')}
                            sx={{
                                textAlign: 'center',
                                color: 'red',
                                fontSize: '2rem',
                                fontWeight: 'bold',
                                fontFamily: 'gandom'
                            }}
                        >
                            بزن بریم خرید!
                        </Typography>
                    }

                </Box>

            </Container>

            <Footer />

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography mt={1} fontFamily={'gandom'}>آیا از حذف محصولات از سبد خرید اطمینان دارید؟</Typography>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {' !این کار غیر قابل بازگشت است'}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>
                        <Typography fontFamily={'gandom'}>
                            لغو
                        </Typography>
                    </Button>
                    <Button onClick={() => {
                        dispatch(clearCart())
                        handleClose()
                    }}>
                        <Typography fontFamily={'gandom'}>حذف</Typography>
                    </Button>
                </DialogActions>
            </Dialog >

        </>
    )

}


export default Shoppingbasketcontainer