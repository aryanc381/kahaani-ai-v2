import Navbar from '../../navbar/navbar'
import { Box, Flex, Image, Text } from '@chakra-ui/react'

function City() {
  return (
    <div>
        <Navbar />
        <CityDescription />
        <Maharashtra />
        <Rajasthan />
        <Karnataka />
    </div>
  )
}

function CityDescription() {
    return(
        <Flex direction={"column"} mt={{base: "9vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "1vw"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}}>
            <Text textStyle={{base: "4xl"}} fontWeight={{base: "300"}}>AI Tours</Text>
            <Text letterSpacing={"-0.1vw"}>Experience the AI-powered tour guide to explore cities in an immersive way. Discover monuments and attractions like never before. Additionally get to know stories, local food, shopping, events, and hidden gems, making every journey effortless and fun.</Text>
        </Flex>
    )
}

function Maharashtra() {
    return (
        <Flex  flexDirection={"column"} mt={{base: "0vw"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}} fontWeight={{base: "500"}} letterSpacing={{base: "-0.2vw"}} >
          <Text textStyle={{base: "4xl"}} mt={{base: "9vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "2vw"}} >Maharashtra</Text>
          <Flex overflowX="auto" flexWrap="nowrap" gap="0.5vw" css={{ "::-webkit-scrollbar": { display: "none" }, scrollbarWidth:"none", "-webkit-overflow-scrolling": "touch"}} >
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "0vw"}}>
              <Image src="./mumbai.png" width={{base: "40vw"}} borderRadius={{base: "10%"}} />
              <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Mumbai</Text>
            </Box>
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
                <Image src="./pune.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Pune</Text>
            </Box>
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
                <Image src="./nagpur.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Nagpur</Text>
            </Box>
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
                <Image src="./nashik.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Nashik</Text>
            </Box>
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
                <Image src="./aurangabad.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Aurangabad</Text>
            </Box>
          </Flex>
        </Flex>
      )
}

function Rajasthan() {
    return (
        <Flex  flexDirection={"column"} mt={{base: "0vw"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}} fontWeight={{base: "500"}} letterSpacing={{base: "-0.2vw"}} >
          <Text textStyle={{base: "4xl"}} mt={{base: "9vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "2vw"}} >North India</Text>
          <Flex overflowX="auto" flexWrap="nowrap" gap="0.5vw" css={{ "::-webkit-scrollbar": { display: "none" }, scrollbarWidth:"none", "-webkit-overflow-scrolling": "touch"}} >
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "0vw"}}>
              <Image src="./cat.jpg" width={{base: "40vw"}} borderRadius={{base: "50%"}}  />
              <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Jaipur</Text>
            </Box>
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
                <Image src="./pune.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Jodhpur</Text>
            </Box>
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
                <Image src="./nagpur.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Udaipur</Text>
            </Box>
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
                <Image src="./nashik.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Jaisalmer</Text>
            </Box>
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
                <Image src="./aurangabad.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Chittorgarh</Text>
            </Box>
          </Flex>
        </Flex>
      )
}

function Karnataka() {
    return (
        <Flex  flexDirection={"column"} mt={{base: "0vw"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}} fontWeight={{base: "500"}} letterSpacing={{base: "-0.2vw"}} >
          <Text textStyle={{base: "4xl"}} mt={{base: "9vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "2vw"}} >South India</Text>
          <Flex overflowX="auto" flexWrap="nowrap" gap="0.5vw" css={{ "::-webkit-scrollbar": { display: "none" }, scrollbarWidth:"none", "-webkit-overflow-scrolling": "touch"}} >
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "0vw"}}>
              <Image src="./shoes.avif" width={{base: "40vw"}} borderRadius={{base: "50%"}} />
              <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Bangalore</Text>
            </Box>
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
                <Image src="./goa.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Goa</Text>
            </Box>
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
                <Image src="./pune.png" width={{base: "40vw"}} borderRadius={{base: "50%"}}/>
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Mysore</Text>
            </Box>
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
                <Image src="./nagpur.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Mangalore</Text>
            </Box>
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
                <Image src="./aurangabad.png" width={{base: "40vw"}} borderRadius={{base: "10%"}}/>
                <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Shivamogga</Text>
            </Box>
          </Flex>
        </Flex>
    )
}

export default City