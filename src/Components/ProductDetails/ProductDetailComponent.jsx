import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import { Typography, Box, Button, Skeleton } from '@mui/material';
import { useSelector } from 'react-redux';
import productImage from '../../Assets/Images/برنج نی نی 04.png'
import toast from 'react-hot-toast';

const Productdetailcomponents = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);
  const logeduser = useSelector((state) => state.auth.logeduser);

  const handleAddToCart = (product) => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
    toast.success('محصول با موفقیت به سبد خرید اضافه شد')
  };

  return (
    <>
      <Grid container spacing={3}>
        {/* بخش تصویر محصول */}
        <Grid item xs={12} md={4} style={{ order: 1, borderLeft: '2px solid gray', display: 'flex', justifyContent: 'center' }}>
          {!product ? (
            <Skeleton variant="rectangular" width={350} height={350} />
          ) : (
            <img src={productImage} alt="" style={{ maxWidth: '350px' }} />
          )}
        </Grid>

        {/* بخش عنوان و توضیحات محصول */}
        <Grid item xs={12} md={4} style={{ order: 2 }}>
          <Box p={4}>
            {!product ? (
              <>
                <Skeleton variant="text" width={200} height={40} />
                <Skeleton variant="text" width={400} height={80} />
              </>
            ) : (
              <>
                <Typography variant="h4" gutterBottom>
                  {product.title}
                </Typography>
                <Typography>{product.body}</Typography>
              </>
            )}
          </Box>
        </Grid>

        {/* بخش امتیاز و دکمه افزودن به سبد خرید */}
        <Grid item xs={12} md={4} style={{ order: 3, borderRight: '2px solid gray' }}>
          <Box p={4} textAlign="center">
            {!product ? (
              <Skeleton variant="text" width={300} height={40} />
            ) : (
              <Typography
                variant="h6"
                style={{
                  backgroundColor: 'aquamarine',
                  color: 'green',
                  borderRadius: '8px',
                  padding: '10px',
                }}
              >
                امتیاز این محصول از مجموع 5 نظر 3.7 از 5 است
              </Typography>
            )}
            <Box display="flex" flexDirection="column" alignItems="center" mt={6}>
              {!product ? (
                <>
                  <Skeleton variant="text" width={100} />
                  <Skeleton variant="rectangular" width={300} height={40} />
                </>
              ) : (
                <>
                  <Typography>1500000 $</Typography>
                  <Button
                    variant="contained"
                    color={logeduser ? (added ? 'success' : 'primary') : 'error'}
                    fullWidth
                    style={{ marginTop: '10px' }}
                    onClick={logeduser && (() => handleAddToCart(product))}
                  >
                    {logeduser
                      ? added
                        ? 'به سبد خرید افزوده شد'
                        : 'افزودن به سبد خرید'
                      : 'برای خرید به حساب خود وارد شوید'}
                  </Button>
                </>
              )}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Productdetailcomponents;
