import React, { useState } from "react";
import { Button, Card, CardContent, CardMedia, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removeItem } from "../../../Redux/Reducers/CartReducer";
import productImg from '../../../Assets/Images/برنج نی نی 04.png'



const Shopping_b_Product = ({ product }) => {

    const dispatch = useDispatch();

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Card sx={{ marginTop: '2rem', minWidth: 230, maxWidth: 280, width: '100%', bgcolor: 'white', borderRadius: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }} >

                <CardMedia
                    component='img'
                    sx={{
                        width: '100%',
                        maxWidth: 210,
                        objectFit: 'contain',
                        Padding: 2,
                        margin: " 0.5rem auto",
                        maxHeight: '210px'
                    }}
                    image={productImg}
                    alt={product.title}

                />

                <CardContent
                    sx={{ px: 2, py: 2, display: 'flex', flexDirection: 'column' }}>

                    <Link sx={{ color: 'inherit', textDecoration: 'none' }} to={`/Online__Shop/product/${product.id}`}>

                        <Typography variant='p' component="div" sx={{ fontWeight: 'bold', mb: 1, textDecoration: 'none', fontFamily: 'gandom', color: 'black' }}>{product.title}</Typography>

                    </Link>

                    <Typography variant='p' component="div" sx={{ fontWeight: 'bold', mb: 1, textDecoration: 'none', fontFamily: 'gandom' }}>تعداد: {product.quantity}</Typography>

                </CardContent>

                <div>

                    <Typography
                        sx={{ px: 2, color: 'gray.700' }}
                        variant="body2">
                        1500000
                    </Typography>


                    <Button variant="contained" color="error" sx={{ borderRadius: 0, fontFamily: 'gandom', width: '100%' }}
                        // onClick={}
                        onClick={handleClickOpen}
                    >
                        حذف از سبد خرید
                    </Button>

                </div>


            </Card>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    <Typography mt={1} fontFamily={'gandom'}>آیا از حذف این محصول اطمینان دارید؟</Typography>
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
                    <Button onClick={() => dispatch(removeItem(product))}>
                        <Typography fontFamily={'gandom'}>حذف</Typography>
                    </Button>
                </DialogActions>
            </Dialog >

        </>
    )
}

export default Shopping_b_Product