import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useDispatch , useSelector} from 'react-redux';
import { addItem } from '/src/redux/reducers/CartReducer';
import productImg from '../../assets/images/برنج نی نی 04.png'



const Product = ({ product }) => {

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

                <Link sx={{ textDecoration: 'none', color: 'inherit' }} to={`/onlineshop-nini/product/${product.id}`}>

                    <Typography variant='p' component="div" sx={{ fontWeight: 'bold', mb: 1, textDecoration: 'none', color: 'black' }}>{product.title}</Typography>

                </Link>

            </CardContent>

            <div>

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
    )
}

export default Product