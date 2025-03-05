import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '/src/Redux/Reducers/CartReducer';
import Productdetailcomponents from '../../Components/ProductDetails/ProductDetailComponent';
import { Paper, Box, Typography } from '@mui/material';
import Navbar from '../../Components/Navbar/Index';
import Footer from '../../Components/Footer/index';
import ProductDetail from '../../ReactQuery/ProductDetailHandler';

const ProductDetailscontainer = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch();
    const { data, isLoading, error } = ProductDetail(id);

    useEffect(() => {
        setProduct(data);
    }, [data]);

    const addToCart = (product) => {
        dispatch(addItem(product));
    };

    if (error) {
        return <div>Error loading product details</div>;
    }

    return (
        <>
            <Navbar />
            <Paper elevation={3} sx={{ borderRadius: '30px', my: 4 }}>
                <Productdetailcomponents addToCart={addToCart} product={product} />
            </Paper>
            <Footer />
        </>
    );
};

export default ProductDetailscontainer;
