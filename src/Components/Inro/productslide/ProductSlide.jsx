import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardMedia, CardContent, Typography, Box } from '@mui/material';
import { addItem } from '/src/redux/reducers/CartReducer';
import { useDispatch, useSelector } from 'react-redux';
import productImg from '../../../assets/images/برنج نی نی 04.png'


const ProductSlide = ({ product }) => {

    const [added, setAdded] = useState(false)

    const logeduser = useSelector((state) => state.auth.logeduser);

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {

        dispatch(addItem(product));

        setAdded(true);
        setTimeout(() => {
            setAdded(false);
        }, 2000);

    };


    return (

        < Box style={{ fontFamily: 'gandom', width: '180px' }}  >

            <Card sx={{ width: 180, bgcolor: 'gray.500', borderRadius: 2, border: 2, borderColor: 'gray.500', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>

                <CardMedia
                    component="img"
                    sx={{
                        width: 160,
                        height: 192,
                        p: 2, pb: 0,
                        objectFit: 'contain',
                        mx: 'auto'
                    }}
                    image={productImg}
                    alt={product.title}
                />

                <CardContent
                    sx={{ px: 2, py: 2, flex: '1 0 auto', height: 140 }}>

                    <Link sx={{ textDecoration: 'none', color: 'inherit' }} to={`/onlineshop-nini/product/${product.id}`}>

                    <Typography variant='p' component="div" sx={{ fontWeight: 'bold', mb: 1, color: 'black' }}>

                        {product.title.split(' ').length > 6 ?
                            `${product.title.split(' ').slice(0, 6).join(' ')}...` :
                            product.title}

                    </Typography>
                    </Link>
                </CardContent>



                <div >



                    <Typography
                        sx={{ px: 2, color: 'gray.700' }}
                        variant="body2">
                        1500000
                    </Typography>

                    <Button variant="contained" color={logeduser ? (added ? "success" : "primary") : 'error'} sx={{ borderRadius: 0, fontFamily: 'gandom', width: '100%' }} onClick={logeduser && (() => handleAddToCart(product))} >

                        {logeduser ? (added ? "به سبد خرید افزوده شد" : "افزودن به سبد خرید") : 'برای خرید به حساب خود وارد شوید'}

                    </Button>

                </div>

            </Card>

        </Box>

    )

}

export default ProductSlide