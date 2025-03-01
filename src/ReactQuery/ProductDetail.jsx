import { useQuery } from "react-query";
import axios from "axios";

const ProductDetail =(id)=> {

    const {data,isLoading , error} = useQuery({
        queryKey:['productDetail' , id], 
        queryFn:async () => {
           const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
           return response.data
        }
    })

    return{data,isLoading, error}
}

export default ProductDetail