import { keepPreviousData, useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  const api = "https://jsonplaceholder.typicode.com/posts";

  const fetchData = axios
    .get(api, {
      params: {
        _start: (query.page - 1) * query.pageSize,
        _limit: query.pageSize,
      },
    })
    .then((res) => res.data);

  return useQuery<Posts[], Error>({
    queryKey: ["posts", query], // any time the query changes, it takes the data from the server
    queryFn: () => fetchData,
    staleTime: 1 * 60 * 1000,
    placeholderData: keepPreviousData,
  });
};

export default usePosts;
