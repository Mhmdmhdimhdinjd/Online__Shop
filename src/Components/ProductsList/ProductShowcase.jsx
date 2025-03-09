import React from "react";
import ProductGrid from "../ProductGrid/Productgrid";
import Product from "../ProductComponent/index";
import { Typography, Box, Skeleton } from "@mui/material";
import UseInfiniteTodos from "../../ReactQuery/ProductListHandler";
import EntierHandler from "../EntierHandler/Index";

const ProductShowcase = () => {
  const { data } = UseInfiniteTodos();
  const products = data?.pages.flatMap((page) => page);

  return (
    <Box
      sx={{
        backgroundColor: "pink",
        marginX: 4,
        marginY: 8,
        paddingTop: 8,
        borderRadius: 2,
        "@media (min-width: 640px)": {
          margin: 0,
        },
      }}
    >
      <Typography
        component="h1"
        sx={{
          textAlign: "center",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          fontFamily: "gandom",
        }}
      >
        محصولات شگفت انگیز
      </Typography>

      {products ? (
        <ProductGrid products={products} Product={Product} />
      ) : (
        
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: 2,
            p: 2,
          }}
        >
          {Array.from(new Array(6)).map((_, index) => (
            <Box
              key={index}
              sx={{
                bgcolor: "white",
                borderRadius: 1,
                p: 1,
              }}
            >
              <Skeleton variant="rectangular" width="100%" height={210} />
              <Skeleton variant="text" width="80%" sx={{ mt: 1 }} />
              <Skeleton variant="text" width="60%" />
            </Box>
          ))}
        </Box>
      )}

      <EntierHandler />
    </Box>
  );
};

export default ProductShowcase;
