import React from "react";
import { Button, Card, CardContent, CardMedia, Typography  } from '@mui/material';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { removeItem } from "../../../redux/reducers/CartReducer";


const Shopping_b_Product = ({ product }) => {

    const dispatch = useDispatch();




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
                image={product.image}
                alt={product.title}

            />

            <CardContent
                sx={{ px: 2, py: 2, display: 'flex', flexDirection: 'column' }}>

                <Link sx={{color:'inherit', textDecoration:'none'}} to={`/onlineshop-nini/product/${product.id}`}>

                    <Typography variant='p' component="div" sx={{ fontWeight: 'bold', mb: 1, textDecoration: 'none' , fontFamily:'gandom' , color:'black' }}>{product.title}</Typography>

                </Link>

                <Typography variant='p' component="div" sx={{ fontWeight: 'bold', mb: 1, textDecoration: 'none', fontFamily:'gandom' }}>تعداد: {product.quantity}</Typography>

            </CardContent>

            <div>

                <Typography
                    sx={{ px: 2, color: 'gray.700' }}
                    variant="body2">
                    ${product.price}
                </Typography>


                <Button variant="contained" color="error" sx={{ borderRadius: 0, fontFamily: 'gandom',width:'100%' }} 
                onClick={() => dispatch(removeItem(product))} 
                >
                    حذف از سبد خرید
                </Button>

            </div>


        </Card>
    )
}

export default Shopping_b_Product