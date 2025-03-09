import { useInfiniteQuery } from 'react-query';
import axios from 'axios';

function UseInfiniteTodos() {
    const { fetchNextPage, data, hasNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['todos'],
        // initialPageParam: 1,
        queryFn: async function ({ pageParam =1}) {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${pageParam}&_limit=10`);
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

