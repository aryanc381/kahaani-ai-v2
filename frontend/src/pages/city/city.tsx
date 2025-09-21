import Navbar from '../../navbar/navbar'
import { Box, Card, Flex, Image, Text } from '@chakra-ui/react'
import {
  Button,
  CloseButton,
  Drawer,
  Portal,
} from "@chakra-ui/react"
import { useState } from 'react'
import Sidebar from '../../sidebar/sidebar'

function City() {
  return (
    <div>
        <Navbar />
        <CityDescription />
        <Maharashtra />
        <Rajasthan />
        <Karnataka />
        <Button1 />
        <Sidebar />
    </div>
  )
}

function CityDescription() {
    return(
        <Flex direction={"column"} mt={{base: "4vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "1vw"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}}>
            <Text textStyle={{base: "4xl"}} fontWeight={{base: "300"}}>AI Tours</Text>
            <Text letterSpacing={"-0.1vw"}>Experience the AI-powered tour guide to explore cities in an immersive way. Discover monuments and attractions like never before. Additionally get to know stories, local food, shopping, events, and hidden gems, making every journey effortless and fun.</Text>
        </Flex>
    )
}
function Maharashtra() {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  const CityMenus: Record<string, any[]> = {
    "mumbai": [
      "Mumbai City Tour",
      "Experience the spirit of Mumbai and if I were a rich man, yada yada yada ",
      ["Gateway of India", "Marine Drive", "Colaba Causeway"],
      "Rs. 700",
      "12hrs"
    ],
    "pune": [
      "Pune City Tour",
      "Embark on the ultimate Pune City Tour not just a journey through streets, but through time, culture, and emotion. From the majestic Shaniwar Wada echoing the valor of the Marathas, to the lively bustle of the old Peths, every step will immerse you in history, heritage.",
      ["Shaniwar Wada", "Peth Roads", "Koregaon Park", "Shaniwar Wada", "Peth Roads", "Koregaon Park"],
      "Rs. 500",
      "24hrs"
    ],
    "nagpur": [
      "Nagpur Tour",
      "Explore the city of oranges",
      ["Deekshabhoomi", "Sitabuldi Fort", "Ambazari Lake"],
      "Rs. 600",
      "10hrs"
    ],
    "nashik": [
      "Nashik Tour",
      "City of grapes and temples",
      ["Trimbakeshwar Temple", "Sula Vineyards", "Pandavleni Caves", "Trimbakeshwar Temple", "Sula Vineyards", "Pandavleni Caves", "Trimbakeshwar Temple", "Sula Vineyards", "Pandavleni Caves", "Trimbakeshwar Temple", "Sula Vineyards", "Pandavleni Caves", "Trimbakeshwar Temple", "Sula Vineyards", "Pandavleni Caves"],
      "Rs. 550",
      "8hrs"
    ],
    "aurangabad": [
      "Aurangabad Tour",
      "Historic city of Maharashtra",
      ["Ajanta Caves", "Ellora Caves", "Bibi ka Maqbara"],
      "Rs. 800",
      "2 Days"
    ]
  }

  const handleCityClick = (city: string) => {
    setSelectedCity(city)
    setOpen(true)
  }

  return (
    <>
    
      <Drawer.Root size="full" open={open} onOpenChange={(e) => setOpen(e.open)}>
        <Portal>
          <Drawer.Backdrop />
          <Drawer.Positioner>
            <Drawer.Content>
              <Drawer.Header></Drawer.Header>
              <Drawer.Body>
                {selectedCity && (
                  <Flex direction="column" gap={6} align="center">
                   
                    <Box position="relative" width="80%" borderRadius="2xl" overflow="hidden" boxShadow="md">
                      <Image src={`./${selectedCity}.png`} alt={CityMenus[selectedCity][0]} width="100%" />
                      <Text
                        position="absolute"
                        top="50%"
                        left="50%"
                        transform="translate(-50%, -50%)"
                        fontSize="2xl"
                        fontWeight="bold"
                        textAlign="center"
                        color="white"
                        width="70vw"
                        borderRadius={"50%"}
                      >
                        {CityMenus[selectedCity][0]}
                      </Text>
                    </Box>

                  
                    <Card.Root width="100%" maxH={{ base: "30vh", md: "35vh" }} overflowY="auto" borderRadius="xl" boxShadow="sm" p={"6vw"}>
                      <Card.Header>
                        <Text  mt={"-5vw"} mb={"3vw"} ml={"-6.5vw"} fontSize="lg" fontWeight="semibold">Description</Text>
                      </Card.Header>
                      <Text fontSize="md" textAlign="left">
                        {CityMenus[selectedCity][1]}
                      </Text>
                    </Card.Root>

                    <Card.Root width="100%" borderRadius="xl" boxShadow="sm">
                      <Card.Header>
                        <Text fontSize="lg" fontWeight="semibold">Checkpoints</Text>
                      </Card.Header>
                      <Card.Body>
                        <Flex direction="column" gap={2} overflowY={"auto"}>
                          {CityMenus[selectedCity][2].map((place: string, idx: number) => (
                            <Box key={idx} p={2} borderRadius="md" _hover={{ bg: "chakra-subtle-bg" }}>
                              <Text>{place}</Text>
                            </Box>
                          ))}
                        </Flex>
                      </Card.Body>
                    </Card.Root>

                
                    <Card.Root width="100%" borderRadius="xl" boxShadow="sm">
                      <Card.Body>
                        <Flex justify="space-between" align="center">
                          <Box>
                            <Text fontSize="sm" color="chakra-subtle-text">Price</Text>
                            <Text fontSize="lg" fontWeight="semibold">{CityMenus[selectedCity][3]}</Text>
                          </Box>
                          <Box>
                            <Text fontSize="sm" color="chakra-subtle-text">Duration</Text>
                            <Text fontSize="lg" fontWeight="semibold">{CityMenus[selectedCity][4]}</Text>
                          </Box>
                        </Flex>
                      </Card.Body>
                    </Card.Root>
                  </Flex>
                )}
              </Drawer.Body>

           
              <Drawer.Footer justifyContent="space-between" ml={"-2vw"}>
                <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
                <Flex gap={2}>
                  <Button variant="outline">Add to Cart</Button>
                  <Button colorScheme="blue"><a href="https://elevenlabs.io/app/talk-to?agent_id=agent_7801k569312hfzcb6gtdx8a9a0nq">Purchase Tour</a></Button>
                </Flex>
              </Drawer.Footer>

              <Drawer.CloseTrigger asChild>
                <CloseButton size="lg" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>

    
      <Flex flexDirection="column" mt="0vw" mr="5.05vw" ml="5.05vw" fontWeight="500" letterSpacing="-0.2vw">
        <Text textStyle="4xl" mt="9vw" letterSpacing="-0.3vw" mb="2vw">Maharashtra</Text>
        <Flex
          overflowX="auto"
          flexWrap="nowrap"
          gap="0.5vw"
          css={{ "::-webkit-scrollbar": { display: "none" }, scrollbarWidth: "none", "-webkit-overflow-scrolling": "touch" }}
        >
          {Object.keys(CityMenus).map((city) => (
            <Box
              key={city}
              position="relative"
              flex="0 0 auto"
              ml="3vw"
              onClick={() => handleCityClick(city)}
              cursor="pointer"
            >
              <Image src={`./${city}.png`} width="40vw" borderRadius="10%" />
              <Text
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                color="#fff"
                textStyle="2xl"
              >
                {city.charAt(0).toUpperCase() + city.slice(1)}
              </Text>
            </Box>
          ))}
        </Flex>
      </Flex>
    </>
  )
}


function Rajasthan() {
    return (
        <Flex  flexDirection={"column"} mt={{base: "0vw"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}} fontWeight={{base: "500"}} letterSpacing={{base: "-0.2vw"}} >
          <Text textStyle={{base: "4xl"}} mt={{base: "9vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "2vw"}} ><Box as={"span"} color={"orange.400"}>North</Box> India</Text>
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
        <>

        <Flex  flexDirection={"column"} mt={{base: "0vw"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}} fontWeight={{base: "500"}} letterSpacing={{base: "-0.2vw"}} >
          <Text textStyle={{base: "4xl"}} mt={{base: "9vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "2vw"}} ><Box as={"span"} color={"blue.400"}>South</Box> India</Text>
          <Flex overflowX="auto" flexWrap="nowrap" gap="0.5vw" css={{ "::-webkit-scrollbar": { display: "none" }, scrollbarWidth:"none", "-webkit-overflow-scrolling": "touch"}} >
            <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "0vw"}}>
              <Image src="./shoes.avif" width={{base: "40vw"}} borderRadius={{base: "50%"}}/>
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
        </>
    )
}

function Button1() {
   
    return (
        <></>
  )
}

export default City