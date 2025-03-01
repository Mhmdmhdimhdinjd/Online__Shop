// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addItem } from '/src/redux/reducers/CartReducer';
// import Productdetailcomponents from '../../components/productdetails/podectdetailcomponent';
// import { Paper, Box, Typography } from '@mui/material';
// import Navbar from '../../Components/Navbar/Index';
// import Footer from '../../Components/Footer/index';
// import ProductDetail from '../../ReactQuery/ProductDetail';

// const ProductDetailscontainer = () => {
//     const { id } = useParams();
//     const [product, setProduct] = useState(null);
//     const dispatch = useDispatch();
//     const {data , isLoading} =ProductDetail(id)

//     useEffect(() => {
//         setProduct(data)
//     }, [id]);

//     const addToCart = (product) => {

//         dispatch(addItem(product))
//     };

//     if (!product) {
//         return <div>Loading...</div>;
//     }

//     return (

//         <>

//             <Navbar />

//             <Paper elevation={3} sx={{ borderRadius: '30px' , my:4 }}>
//                 <Box p={4} color="gray">
//                     <Typography>{product.category}</Typography>
//                 </Box>

//                 <Productdetailcomponents addToCart={addToCart} product={product} />

//             </Paper>

//             <Footer />

//         </>

//     )
// }

// export default ProductDetailscontainer

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '/src/redux/reducers/CartReducer';
import Productdetailcomponents from '../../components/productdetails/podectdetailcomponent';
import { Paper, Box, Typography } from '@mui/material';
import Navbar from '../../Components/Navbar/Index';
import Footer from '../../Components/Footer/index';
import ProductDetail from '../../ReactQuery/ProductDetail';

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

    if (isLoading || !product) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error loading product details</div>;
    }

    return (
        <>
            <Navbar />
            <Paper elevation={3} sx={{ borderRadius: '30px', my: 4 }}>
                <Box p={4} color="gray">
                    <Typography>{product.category}</Typography>
                </Box>
                <Productdetailcomponents addToCart={addToCart} product={product} />
            </Paper>
            <Footer />
        </>
    );
};

export default ProductDetailscontainer;
