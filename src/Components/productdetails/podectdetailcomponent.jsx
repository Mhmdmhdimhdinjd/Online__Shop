import React, { useState } from 'react'
import Grid from '@mui/material/Grid';
import { Typography, Box, Button } from '@mui/material';
import { useSelector } from 'react-redux';

const Productdetailcomponents = ({ product, addToCart }) => {

  const [added, setAdded] = useState(false)

  const logeduser = useSelector((state) => state.auth.logeduser);

  const handleAddToCart = (product) => {

    addToCart(product)

    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);

  };


  return (
    <>


      <Grid container spacing={3}>
        <Grid item xs={12} md={4} style={{ order: 3, borderRight: '2px solid gray' }}>
          <Box p={4} textAlign="center">
            <Typography variant="h6" style={{ backgroundColor: 'aquamarine', color: 'green', borderRadius: '8px', padding: '10px' }}>
              امتیاز این محصول از مجموع {product.rating.count} نظر {product.rating.rate} از 5 است
            </Typography>
            <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
              <Typography>{product.price} $</Typography>
              <Button variant="contained" color={logeduser ? (added ? "success" : "primary") : 'error'} fullWidth style={{ marginTop: '10px' }} onClick={logeduser && (() => handleAddToCart(product))} >
              
              {logeduser ? (added ? "به سبد خرید افزوده شد" : "افزودن به سبد خرید") : 'برای خرید به حساب خود وارد شوید'}
                
              </Button>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} style={{ order: 2 }}>
          <Box p={4}>
            <Typography variant="h4" gutterBottom>
              {product.title}
            </Typography>
            <Typography>{product.description}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} style={{ order: 1, borderLeft: '2px solid gray', display: 'flex', justifyContent: 'center' }}>
          <img src={product.image} alt="" style={{ maxWidth: '350px' }} />
        </Grid>
      </Grid>
    </>
  );
};

export default Productdetailcomponents;
