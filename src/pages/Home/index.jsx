import NavBar from "../../Components/Navbar/Index";
import Slider from "../../Components/Slider/Slider";
import Intro from "../../Components/Inro/introcontainer";
import ProductShowcase from "../../Components/productslist/ProductShowcase";
import Footer from "../../Components/Footer";

const Home = () => {

    return(
        <>
        
        <NavBar/>

        <Slider/>

        <Intro/>

        <ProductShowcase/>

        <Footer/>
        
        </>
    )
}

export default Home