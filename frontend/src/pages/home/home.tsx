import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Navbar from "../../navbar/navbar";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../sidebar/sidebar";



function Home() {
  return(
    <>
      <Navbar />
      
      <CustomerInfo />
 
      <Tours />
      <Discover />
      <Experiences />
      <Sidebar />
    </>
    
  )
}



export function CustomerInfo() {
  return(
    <Flex justifyContent={"center"} gap={{base: "9vw"}} mt={{base: "7vw"}}>
      <Flex direction={"column"} textAlign={"center"} width={{base: "25vw"}}>
        <Text textStyle={"5xl"} fontWeight={"600"}>9</Text>
        <Text textStyle={"md"} fontWeight={"300"}>Friends</Text>
      </Flex>
      
      <Flex direction={"column"} textAlign={"center"} width={{base: "25vw"}}>
        <Text textStyle={"5xl"} fontWeight={"600"}>16</Text>
        <Text>Discoveries</Text>
      </Flex>

      <Flex direction={"column"} textAlign={"center"} width={{base: "25vw"}}>
        <Text textStyle={"5xl"}fontWeight={"600"}>8</Text>
        <Text>Cities</Text>
      </Flex>
    </Flex>
  )
}

function Tours() {
  const navigate = useNavigate();
  return (
    <Flex  flexDirection={"column"} mt={{base: "0vw"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}} fontWeight={{base: "500"}} letterSpacing={{base: "-0.2vw"}} >
      <Text textStyle={{base: "4xl"}} mt={{base: "9vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "1vw"}} >AI Tours</Text>
      <Flex mt={"1vw"} overflowX="auto" flexWrap="nowrap" gap="0.5vw" css={{ "::-webkit-scrollbar": { display: "none" }, scrollbarWidth:"none", "-webkit-overflow-scrolling": "touch"}} >
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "0vw"}}>
          <Image src="./Gradient4.png" width={{base: "40vw"}} borderRadius={{base: "12%"}} onClick={() => {navigate('/city')}}/>
          <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">City</Text>
        </Box>
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
            <Image src="./museums.svg" width={{base: "40vw"}} borderRadius={{base: "12%"}} onClick={() => {navigate('/monuments')}}/>
            <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Monuments</Text>
        </Box>
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
            <Image src="./Gradient3.png" width={{base: "40vw"}} borderRadius={{base: "12%"}} />
            <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Museums</Text>
        </Box>
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
            <Image src="./budget.png" width={{base: "40vw"}} borderRadius={{base: "12%"}}/>
            <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Budget</Text>
        </Box>
        
        
      </Flex>
    </Flex>
  );
}

function Discover() {
  return (
    <Flex  flexDirection={"column"} mt={{base: "-4w"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}} fontWeight={{base: "500"}} letterSpacing={{base: "-0.2vw"}}>
      <Text textStyle={{base: "4xl"}} mt={{base: "9vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "1vw"}}>Most Popular</Text>
      <Flex overflowX="auto" flexWrap="nowrap" gap="0.5vw" ml={{base: "-2vw"}} css={{ "::-webkit-scrollbar": { display: "none" }, scrollbarWidth:"none", "-webkit-overflow-scrolling": "touch"}} >
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "2.5vw"}}>
          <Image src="./wada.png" mt={"2.4vw"} width={{base: "40vw"}} borderRadius={{base: "10%"}} />
          <Text position="relative" color="#fff" mt={"-2vw"} textAlign={"center"} textStyle="xl" ml={"1vw"}>Shaniwar Wada</Text>
        </Box>
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3.5vw"}}>
            <Image mt={"0.1vw"} src="./taj-mahal.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
            <Text position="relative" color="#fff" mt={"0.5vw"} textAlign={"center"} textStyle="xl" ml={"1vw"}>Taj Mahal</Text>
        </Box>
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "5.5vw"}}>
            <Image src="./red-fort.png" mt={"-1.5vw"} width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
            <Text position="relative" color="#fff" mt={"1.5vw"} textAlign={"center"} textStyle="xl" ml={"1vw"}>Red Fort</Text>
        </Box>
      </Flex>
    </Flex>
  )
}

function Experiences() {
  return (
    <Flex  flexDirection={"column"} mt={{base: "-4vw"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}} fontWeight={{base: "500"}} letterSpacing={{base: "-0.2vw"}}>
      <Text textStyle={{base: "4xl"}} mt={{base: "9vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "1vw"}}>Experiences</Text>
      <Flex overflowX="auto" flexWrap="nowrap" gap="0.5vw" ml={{base: "-2vw"}} css={{ "::-webkit-scrollbar": { display: "none" }, scrollbarWidth:"none", "-webkit-overflow-scrolling": "touch"}} >
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "2.5vw"}}>
          <Image src="./Gradient5.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
          <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Music</Text>
        </Box>
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
            <Image src="./Gradient6.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
            <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Theatre</Text>
        </Box>
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
            <Image src="./Gradient (5).svg" width={{base: "40vw"}}/>
            <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Workshops</Text>
        </Box>
      </Flex>
      <Text textAlign={"center"} mt={{base: "3vw"}} mb={{base: "3vw"}}>This website is optimised for iPhone users.</Text>
    </Flex>
  )
}




export default Home;