import React from "react";
import Grid from '@mui/material/Grid';



const ProductGrid = ({ products , Product }) => {


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

            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}


        </Grid>

    )

}

export default ProductGrid