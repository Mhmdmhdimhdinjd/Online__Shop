import React, { useState, useRef, useEffect } from "react";
import ProductSlide from "../productslide/ProductSlide";
import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
// import { Link } from 'react-router-dom';
import { Button, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { SwiperSlide } from "swiper/react";
import EntierHandler from "../../entierHandler";

import useInfiniteTodos from "../../../ReactQuery/ProductListHandler";

const ProductSlider = () => {

    // const loadingTarget = useRef(null)

    const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteTodos();

    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         entries => {
    //             if (entries[0].isIntersecting && hasNextPage) {
    //                 const intervalId = setInterval(() => {
    //                     if (entries[0].isIntersecting && hasNextPage) {
    //                         fetchNextPage();
    //                     } else {
    //                         clearInterval(intervalId);
    //                     }
    //                 }, 1000); // عملیات را هر ثانیه یک بار تکرار می‌کند
    //             }
    //         },
    //         {
    //             threshold: 0.0000000001
    //         }
    //     );
    
    //     const currentTarget = loadingTarget.current;
    //     if (currentTarget) {
    //         observer.observe(currentTarget);
    //     }
    
    //     return () => {
    //         if (currentTarget) {
    //             observer.unobserve(currentTarget);
    //         }
    //     };
    // }, [fetchNextPage, hasNextPage]);
    


    //     // {console.log()}

    // let page = data?.pages.map((page) =>{
    //     return page.map((products) =>{return products})
    // })

    const products = data?.pages.flatMap((page) => page);


    // {data?.pages.map((page) => {
    //     page.map((product) =>console.log(product))
    // })}


    //     // const dispatch = useDispatch();

    //     const handleAddToCart = (product) => {
    //         // dispatch(addItem(product));
    //         console.log('hnkj')


    //     };


    return (

        <>

            <Swiper
                slidesPerView={'auto'}
                spaceBetween={10}
                freeMode={true}
                modules={[FreeMode]}
                className="mySwiper2 "
            >



                {products?.map((product) => {
                    return (
                        < SwiperSlide key={product.id} product={product} style={{ fontFamily: 'gandom', width: '180px' }}  >


                            <ProductSlide key={product.id} product={product} />




                            {/* <Card sx={{ width: 180, bgcolor: 'gray.500', borderRadius: 2, border: 2, borderColor: 'gray.500', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', overflow: 'hidden' }}>

                            <CardMedia
                                component="img"
                                sx={{
                                    width: 160,
                                    height: 192,
                                    p: 2, pb: 0,
                                    objectFit: 'contain',
                                    mx: 'auto'
                                }}
                                image={product.image}
                                alt={product.title}
                            />

                            <CardContent
                                sx={{ px: 2, py: 2, flex: '1 0 auto', height: 140 }}>
                                <Link to={`/ninishop2/product/${product.id}`} style={{ textDecoration: 'none' }}>
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
                                    ${product.price}
                                </Typography>

                                <Button variant="contained" color="primary" sx={{ borderRadius: 0, fontFamily: 'gandom', width: '100%' }} onClick={() => handleAddToCart(product)} >

                                    {added ? "به سبد خرید افزوده شد" : "افزودن به سبد خرید"}

                                </Button>

                            </div>

                        </Card> */}

                        </SwiperSlide>

                    )
                })}

                <SwiperSlide >
                    <EntierHandler/>
                </SwiperSlide>
                


            </Swiper>

        </>

    )
}

export default ProductSlider



// import UseInfiniteTodos from './UseInfiniteTodos';

// function TodoList() {
//     const {fetchNextPage , data}= useInfiniteTodos();

//     return (
//         <>

// {data?.pages.map((page) => {
//     page.map((product) =>console.log(product))
// })}

//             {/* {data?.pages.map((page, pageIndex) => (
//                 <div key={pageIndex}>
//                     {page.data.map((todo) => (
//                         <div key={todo.id}>{todo.title}</div>
//                     ))}
//                 </div>
//             ))} */}
//             {/* <Button
//                 onClick={() => fetchNextPage()}
//                 // disabled={!hasNextPage || isFetchingNextPage}
//             >
//                 {isFetchingNextPage ? 'Loading more...' : hasNextPage ? 'Load More' : 'Nothing more to load'}
//             </Button> */}
//         </>
//     );
// }

// export default TodoList;
