import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { ButtonGroup, IconButton, Pagination } from "@chakra-ui/react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import { Avatar, HStack, defineStyle } from "@chakra-ui/react"
import { Grid } from "@chakra-ui/react"
import Navbar from "../../navbar/navbar";

const ringCss = defineStyle({
  outlineWidth: "0.3vw",
  outlineColor: "colorPalette.500",
  outlineOffset: "0.3vw",
  outlineStyle: "dotted",
})

function Home() {
  return(
    <>
      <Navbar />
      <Tours />
      <Discover />
    </>
    
  )
}

function Tours() {
  return (
    <Flex  flexDirection={"column"} mt={{base: "0vw"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}} fontWeight={{base: "500"}} letterSpacing={{base: "-0.2vw"}}>
      <Text textStyle={{base: "4xl"}} mt={{base: "9vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "1vw"}}>Tours</Text>
      <Flex>
        <Box position={{base: "relative"}} display={{base: "inline-block"}} ml={{base: "0.5vw"}}>
          <Image src="./Gradient4.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
          <Text position={"absolute"} bottom={"16vw"} left={"15vw"} color={"#fff"} textStyle={{base: "2xl"}}>City</Text>
        </Box>
        <Box position={{base: "relative"}} display={{base: "inline-block"}} ml={{base: "3vw"}}>
            <Image src="./Gradient3.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
            <Text position={"absolute"} bottom={"16vw"} left={"5vw"} color={"#fff"} textStyle={{base: "2xl"}}>Monuments</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

function Discover() {
  return (
    <Flex  flexDirection={"column"} mt={{base: "-4vw"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}} fontWeight={{base: "500"}} letterSpacing={{base: "-0.2vw"}}>
      <Text textStyle={{base: "4xl"}} mt={{base: "9vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "1vw"}}>Discover</Text>
      <Flex>
        <Box position={{base: "relative"}} display={{base: "inline-block"}} ml={{base: "0.5vw"}}>
          <Image src="./Gradient5.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
          <Text position={"absolute"} bottom={"16vw"} left={"12.3vw"} color={"#fff"} textStyle={{base: "2xl"}}>Shops</Text>
        </Box>
        <Box position={{base: "relative"}} display={{base: "inline-block"}} ml={{base: "3vw"}}>
            <Image src="./Gradient6.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
            <Text position={"absolute"} bottom={"16vw"} left={"13.3vw"} color={"#fff"} textStyle={{base: "2xl"}}>Food</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

export default Home;