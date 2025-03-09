import React, { useState } from "react";
import ProductSlide from "../ProductSlide/ProductSlide";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper/modules';
import EntierHandler from "../../EntierHandler/Index";
import useInfiniteTodos from "../../../ReactQuery/ProductListHandler";
import { Skeleton, Box } from '@mui/material';

const ProductSlider = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useInfiniteTodos();

  const products = data?.pages.flatMap((page) => page);

  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={10}
      freeMode={true}
      modules={[FreeMode]}
      className="mySwiper2 "
    >
      {products ? (
        products.map((product) => (
          <SwiperSlide key={product.id} style={{ fontFamily: 'gandom', width: '180px' }}>
            <ProductSlide key={product.id} product={product} />
          </SwiperSlide>
        ))
      ) : (
        Array.from(new Array(10)).map((_, index) => (
          <SwiperSlide key={index} style={{ fontFamily: 'gandom', width: '180px' }}>
            <Box>
              <Skeleton variant="rectangular" width={160} height={192} />
              <Skeleton variant="text" width={180} />
              <Skeleton variant="text" width={140} />
              <Skeleton variant="rectangular" width={180} height={40} />
            </Box>
          </SwiperSlide>
        ))
      )}
      <SwiperSlide style={{ width: '180px' }}>
        <EntierHandler />
      </SwiperSlide>
    </Swiper>
  );
};

export default ProductSlider;
