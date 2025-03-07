import React from "react";
import usePosts from "./hooks/usePosts";
import { Button, Stack } from "@chakra-ui/react";

const PostList = () => {
  const pageSize = 10;

  const { data, isLoading, error, fetchNextPage, isFetchingNextPage } =
    usePosts({ pageSize });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <ul>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </li>
            ))}
          </React.Fragment>
        ))}
      </ul>
      <Stack direction="row" gap="4" align="center" marginY={2}>
        <Button disabled={isFetchingNextPage} onClick={() => fetchNextPage()}>
          {isFetchingNextPage ? "Loading..." : "Load More"}
        </Button>
      </Stack>
    </>
  );
};

export default PostList;
