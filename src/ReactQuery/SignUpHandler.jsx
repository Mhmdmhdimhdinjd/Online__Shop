import axios from "axios"
import { useMutation } from "react-query"

function SignupHndler ()  {


    const { mutate ,isLoading } = useMutation({
        mutationKey:'SignUp',
        mutationFn:(data) =>{
            return axios.post('https://jsonplaceholder.typicode.com/users', data)
        },
        
    })


    return {mutate , isLoading} 
}

export default SignupHndler