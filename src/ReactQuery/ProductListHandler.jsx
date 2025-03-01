// import { Button } from '@mui/material';
// import { useInfiniteQuery } from '@tanstack/react-query';
// import axios from 'axios';




// function UseInfiniteTodos() {



//     const { data, fetchNextPage } = useInfiniteQuery({
//         queryKey: ['todos'],
//         initialPageParam: 1,
//         queryFn: async function ({ pageParam }) {
//             const response = await axios.get(`https://sit-karyabi.saminray.com/apiapp/JobOpportunity/GetFilteredJobOpportunity?page=${pageParam}&_limit=10`)
//             // https://sit-karyabi.saminray.com/apiapp/JobOpportunity/GetFilteredJobOpportunity?Page=5&Limit=10
//             return response.data
//         },
//         getNextPageParam: function (lastPage, lastPageParam) {
//             if (lastPage.length === 0) return undefined
//             return lastPageParam.length + 1
//         }
//     })

//     // return { data,fetchNextPage, hasNextPage, isFetchingNextPage}

//     return {data , fetchNextPage}

//     // return (
//     //     <>
//     //     {console.log(data?.pages.map((page) =>{
//     //         return page.data.data
//     //     }))}
//     //     </>
//     // )
    

// }

// export default UseInfiniteTodos



import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

function UseInfiniteTodos() {
    const { fetchNextPage, data, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['todos'],
        initialPageParam: 1,
        queryFn: async function ({ pageParam }) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=3`);
            return response.data;
        },
        getNextPageParam: function (lastPage, allPages) {
            if (lastPage.length === 0) return undefined;
            return allPages.length + 1;
        },
    });

    return { fetchNextPage, data, hasNextPage, isFetchingNextPage };
}

export default UseInfiniteTodos;

