import React from "react";
import Shopping_b_Product from "../product/product";
import Grid from '@mui/material/Grid';



const ProductGrid = ({ cartItem }) => {


    return (

        <Grid
            container
            direction="row"
            sx={{
                justifyContent: "space-evenly",
                alignItems: "stretch",
                paddingBottom: '70px',
                position: 'relative',
                borderRadius: '2rem',
                overflow: 'hidden'
            }}
        >

            {cartItem.map((product) => (
                <Shopping_b_Product key={product.id} product={product} />
            ))}


        </Grid>

    )

}

export default ProductGrid