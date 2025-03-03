import { useState } from "react";
import usePosts from "../hooks/usePosts";
import { Button, Stack } from "@chakra-ui/react";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const { data } = usePosts({ page, pageSize });

  return (
    <>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
      <Stack direction="row" gap="4" align="center" marginY={2}>
        <Button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </Button>
        <Button onClick={() => setPage(page + 1)}>Next</Button>
      </Stack>
    </>
  );
};

export default PostList;
