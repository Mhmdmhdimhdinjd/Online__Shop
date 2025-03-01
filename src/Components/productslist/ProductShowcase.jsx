import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import{addItem} from '../../redux/reducers/CartReducer'
import axios from "axios";
import ProductGrid from "../productGrid/Productgrid";
import Product from "../product/product";
import { Typography, Box, CircularProgress, } from "@mui/material";
import UseInfiniteTodos from "../../ReactQuery/ProductListHandler";
import EntierHandler from "../entierHandler";

const ProductShowcase = () => {

    const { data } = UseInfiniteTodos();

    const products = data?.pages.flatMap((page) => page);



    return (

        <Box
            sx={{
                backgroundColor: 'pink',
                marginX: 4,
                marginY: 8,
                paddingTop: 8,
                borderRadius: 2,
                '@media (min-width: 640px)': {
                    margin: 0,
                },
            }}
        >

            <Typography
                component="h1"
                sx={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    fontFamily: 'gandom'
                }} >
                محصولات شگفت انگیز
            </Typography>


            {products ? <ProductGrid products={products} Product={Product} /> : <CircularProgress style={{margin:'auto' , display:'block'}}/>}

            <EntierHandler />

        </Box>

    )
}


export default ProductShowcase