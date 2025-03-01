import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductSlider from "./productslider/ProductSlider";


const Intro = () => {

    const [Products, setProducts] = useState([])

   

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setProducts(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    if (Products.length === 0) {
        return <div>Loading...</div>;
    }


    return(
        <ProductSlider Products={Products}/>
    )

}

export default Intro