import ProductGrid from "../../Components/productGrid/Productgrid";
import Product from "../../Components/product/product";
import UseInfiniteTodos from "../../ReactQuery/ProductListHandler";
import EntierHandler from "../../Components/entierHandler";
import { Container, Typography , CircularProgress } from "@mui/material";
import NavBar from "../../Components/Navbar/Index";
import Footer from '../../Components/Footer/index'


const Productcscontainer = () => {

    const { data } = UseInfiniteTodos();

    const products = data?.pages.flatMap((page) => page);

    return (
        <>

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

                {products ? <ProductGrid products={products} Product={Product} /> : <CircularProgress style={{ margin: 'auto', display: 'block' }} />}

                <EntierHandler />

            </Container>

        </>
    )
}


export default Productcscontainer