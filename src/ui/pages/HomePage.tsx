import { Box } from "@chakra-ui/react"
import { Outlet } from "react-router-dom"

function HomePage():JSX.Element {
  return (
    <>
      <Box h="50px"
       bg="rgb(60,60,60)"
       fontFamily="bold"
       textAlign="center"
       boxSizing="border-box"
       fontSize={23}
       pt={2} pb={2}
       color="white">
        City App
      </Box>
      <Outlet />
    </>
  )
}

export default HomePage