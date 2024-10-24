import { Box, Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function HogeHogeIndex() {
  return (
    <>
      <Box padding={"100px"}>
        <Box padding={"250px"} bgColor={"white"}>
          <Center>
            <Text>This is a HogeHogeIndex page.</Text>
          </Center>
          <Center>
            <Text>Hello from generouted!!</Text>
          </Center>
          <Center textColor={"red"}>
            <Link to="/other_page"> to other_page </Link>
          </Center>
        </Box>
      </Box>
    </>
  );
}
