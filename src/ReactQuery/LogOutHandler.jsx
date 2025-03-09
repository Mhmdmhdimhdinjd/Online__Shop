import axios from "axios"
import { useMutation } from "react-query"

function lgOutHandler ()  {


    const { mutate ,isLoading } = useMutation({
        mutationKey:'lgOutHandler',
        mutationFn:(data) =>{
            return axios.post('https://jsonplaceholder.typicode.com/users', data)
        },
        
    })


    return {mutate , isLoading} 
}

export default lgOutHandler