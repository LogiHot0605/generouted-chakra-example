import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

export default function HogeHogeLayout() {
  return (
    <>
      <Box minW={"full"} minH={"100vh"} bgColor={"gray.200"}>
        <Outlet />
      </Box>
    </>
  );
}
