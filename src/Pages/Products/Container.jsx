import ProductGrid from "../../Components/ProductGrid/Productgrid";
import Product from "../../Components/ProductComponent";
import UseInfiniteTodos from "../../ReactQuery/ProductListHandler";
import EntierHandler from "../../Components/entierHandler";
import { Container, Typography, Box , Skeleton } from "@mui/material";
import NavBar from "../../Components/Navbar/Index";
import Footer from '../../Components/Footer'


const Productcscontainer = () => {

    const { data } = UseInfiniteTodos();

    const products = data?.pages.flatMap((page) => page);

    return (
        <>

            <NavBar />

            <Container>

                <Typography
                    component="h1"
                    fontFamily={'gandom'}
                    sx={{
                        textAlign: 'center',
                        color: 'black',
                        fontSize: '2rem',
                        fontWeight: 'bold',
                        mb: 2,
                        mt: 5
                    }} >
                    محصولات فروشگاه نی نی
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

            </Container>

            <Footer/>

        </>
    )
}


export default Productcscontainer