import axios from "axios"
import { useMutation } from "react-query"

function LoginQuery__handler ()  {


    const { mutate ,isLoading } = useMutation({
        mutationKey:'login',
        mutationFn:(data) =>{
            return axios.post('https://jsonplaceholder.typicode.com/users', data)
        },
        
    })


    return {mutate , isLoading} 
}

export default LoginQuery__handler