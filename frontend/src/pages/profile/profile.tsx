import { Badge, Box, Button, Card, CloseButton, defineStyle, Drawer, Flex, Heading, Image, Portal, Text } from '@chakra-ui/react'
import { Avatar } from "@chakra-ui/react"
import Navbar from '../../navbar/navbar'
import Sidebar from '../../sidebar/sidebar'
import { useState } from 'react'
import { VscArrowLeft, VscBroadcast, VscSettingsGear, VscVr } from 'react-icons/vsc'
import { useColorMode, useColorModeValue } from '../../components/ui/color-mode'
import { useNavigate } from 'react-router-dom'
import { CustomerInfo } from '../home/home'


function Profile() {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <Information />
        <Settings />
        <Details />
        <MyTrips />
        
    </div>
  )
}

const ringCss = defineStyle({
});

function Information() {
  return (
    <>
    
    <Flex justify="center" mt="6vw">
      <Card.Root
        w={{ base: "90vw", md: "600px" }}
        p={6}
        shadow="md"
        rounded="2xl"
      >
        <Flex align="center" gap={6}>
          
          <Avatar.Root
            css={ringCss}
            w={{ base: "15vw", md: "100px" }}
            h={{ base: "15vw", md: "100px" }}
          >
            <Avatar.Fallback name="Aryan" />
            <Avatar.Image src="./pfp.jpg" />
          </Avatar.Root>
          <Box>
            <Flex>
              <Heading size={{ base: "lg", md: "xl" }}>Aryan Chauhan</Heading><Badge ml={"2vw"} colorPalette={"green"}>premium</Badge>
            </Flex>
            
            <Flex fontSize="sm" color="gray.500" mt={"1vw"}>
                <Text>I travelled the world at the age of 21.</Text>
            </Flex>
          </Box>
        </Flex>

        <CustomerInfo />
      </Card.Root>
    </Flex>
    
    </>
  );

}

function Details() {
    const textColor = useColorModeValue("black", "white");
    return(
        <Flex>
        <Card.Root size="sm" width={"full"} mr={"5vw"} ml={"5vw"} mt={"4vw"} borderRadius={"3vw"}>
            <Card.Header>
            <Heading size="md">Customer Information</Heading>
            </Card.Header>
            <Card.Body color="fg.muted">
                <Text>Email &nbsp;&nbsp;&nbsp;: <span style={{color: textColor, padding:"1vw", borderRadius: "1vw"}}>chauhanaryan381@gmail.com</span></Text>
                <Text>Phone &nbsp;: <span style={{color: textColor, padding:"1vw", borderRadius: "1vw"}}>9094122622</span></Text>
            </Card.Body>
      </Card.Root>
      </Flex>
    )
}

function MyTrips() {
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
    return(
        <>  
            <Card.Root ml={"5vw"} mr={"5vw"} mt={"4vw"} mb={"20vw"} borderRadius={"3vw"} pb={"5vw"}>
              {/* Drawer */}
              <Drawer.Root size="full" open={open} onOpenChange={(e) => setOpen(e.open)}>
                <Portal>
                  <Drawer.Backdrop />
                  <Drawer.Positioner>
                    <Drawer.Content>
                      <Drawer.Header></Drawer.Header>
                      <Drawer.Body>
                        {selectedCity && (
                          <Flex direction="column" gap={6} align="center">
                            {/* Tour Image */}
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
                              >
                                {CityMenus[selectedCity][0]}
                              </Text>
                            </Box>
        
                            {/* Scrollable Description Card */}
                            <Card.Root width="100%" maxH={{ base: "30vh", md: "35vh" }} overflowY="auto" borderRadius="xl" boxShadow="sm" p={"6vw"}>
                              <Card.Header>
                                <Text  mt={"-5vw"} mb={"3vw"} ml={"-6.5vw"} fontSize="lg" fontWeight="semibold">Description</Text>
                              </Card.Header>
                              <Text fontSize="md" textAlign="left">
                                {CityMenus[selectedCity][1]}
                              </Text>
                            </Card.Root>
        
                            {/* Checkpoints */}
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
        
                            {/* Price & Duration */}
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
        
                      {/* Footer */}
                      <Drawer.Footer justifyContent="space-between" ml={"-2vw"}>
                        <Button variant="outline" onClick={() => setOpen(false)}>Close</Button>
                        <Flex gap={2}>
                          <Button colorScheme="blue" backgroundColor={"green.500"} color={"white"}><a href="https://elevenlabs.io/app/talk-to?agent_id=agent_7801k569312hfzcb6gtdx8a9a0nq">Visit Tour</a></Button>
                        </Flex>
                      </Drawer.Footer>
        
                      <Drawer.CloseTrigger asChild>
                        <CloseButton size="lg" />
                      </Drawer.CloseTrigger>
                    </Drawer.Content>
                  </Drawer.Positioner>
                </Portal>
              </Drawer.Root>
        
              {/* Cities List */}
              <Flex flexDirection="column" mt="0vw" mr="5.05vw" ml="5.05vw" fontWeight="500" letterSpacing="-0.2vw">
                <Text fontSize="4vw" mt="5vw" fontWeight={"semibold"} letterSpacing="0vw" mb="2vw">My Trips</Text>
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
                      <Image src={`./${city}.png`} width="30vw" borderRadius="10%" />
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
              </Card.Root>
            </>
    )
}

function Settings() {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();
    return (
        <Flex justify="center">
        <Card.Root
            size="sm"
            w="full"
            mx="5vw"
            mt="4vw"
            mb="0vw"
            borderRadius="3vw"
        >
            <Card.Body color="fg.muted" mt={"1vw"}>
            <Flex justify="center" align="center" gap="7vw">
                <Flex direction={"column"} alignItems={"center"} width={"15vw"}>
                    <Drawer.Root size={"full"}>
                      <Drawer.Trigger asChild>
                        <Flex direction={"column"} alignItems={"center"} width={"15vw"}>
                    <VscSettingsGear size="8vw" />
                    <Text mt={"1vw"}>Settings</Text>
                </Flex>
                    </Drawer.Trigger>
                    <Portal>
                      <Drawer.Backdrop />
                      <Drawer.Positioner>
                        <Drawer.Content>
                          <Drawer.Context>
                            {(store) => (
                              <Drawer.Body pt="6vw" spaceY="3vw">
                                
                                <Button variant={"solid"} onClick={() => store.setOpen(false)}>Close</Button>
                              </Drawer.Body>
                            )}
                          </Drawer.Context>
                          <Drawer.CloseTrigger asChild>
                            <CloseButton size="sm" />
                          </Drawer.CloseTrigger>
                        </Drawer.Content>
                      </Drawer.Positioner>
                    </Portal>
                  </Drawer.Root>
                </Flex>
                
                <Flex direction={"column"} alignItems={"center"} width={"15vw"}>
                    <VscBroadcast size="8vw" />
                    <Text mt={"1vw"}>Plans</Text>
                </Flex>

                <Flex direction={"column"} alignItems={"center"} onClick={toggleColorMode} width={"15vw"}>
                    <VscVr size="8vw" />
                        <Text mt={"1vw"}>
                            {colorMode === "light" ? "Dark" : "Light"}
                        </Text>
                </Flex>
                
                <Flex direction={"column"} alignItems={"center"} width={"15vw"} onClick={() => {navigate('/login')}}>
                    <VscArrowLeft size="8vw" />
                    <Text mt={"1vw"} >Logout</Text>
                </Flex>
            </Flex>
            </Card.Body>
        </Card.Root>
        </Flex>
    );
}

export default Profile;