import { keepPreviousData, useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostQuery {
  pageSize: number;
  pageParam?: number; // the current page number
}

const usePosts = (query: PostQuery) => {
  const api = "https://jsonplaceholder.typicode.com/posts";

  const fetchPage = (pageParam) =>
    axios
      .get(api, {
        params: {
          _start: (pageParam - 1) * query.pageSize,
          _limit: query.pageSize,
        },
      })
      .then((res) => res.data);

  return useInfiniteQuery<Posts[], Error>({
    queryKey: ["posts", query], // any time the query changes, it takes the data from the server
    queryFn: ({ pageParam = 1 }) => fetchPage(pageParam),
    staleTime: 1 * 60 * 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    getPreviousPageParam: (firstPage, allPages, lastPage) => {
      return firstPage.length > 0 ? allPages.length - 1 : lastPage;
    },
    placeholderData: keepPreviousData,
  });
};

export default usePosts;
