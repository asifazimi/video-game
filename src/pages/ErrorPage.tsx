import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box padding="5px">
      <Heading>Opps!</Heading>
      <Text>
        {" "}
        {isRouteErrorResponse(error)
          ? "Page does not found!"
          : "An unexpected error occurred."}
      </Text>
    </Box>
  );
};

export default ErrorPage;
