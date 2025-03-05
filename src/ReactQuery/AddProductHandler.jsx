import axios from "axios"
import { useMutation } from "react-query"

function AddProductHandler ()  {


    const { mutate ,isLoading } = useMutation({
        mutationKey:'AddProduct',
        mutationFn:async (data) =>{
            const response = await axios.post('https://jsonplaceholder.typicode.com/users', data)
            return response
        },
        
    })


    return {mutate , isLoading} 
}

export default AddProductHandler