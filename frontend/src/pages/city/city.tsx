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
import axios from 'axios'

function City() {
  return (
    <div>
        <Navbar />
        <CityDescription />
        <NorthIndia />
        <Maharashtra />
        <SouthIndia />
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
      700,
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

  async function handleCheckout() {
    try {
      const city: any = selectedCity;
      const response = await axios({
        method: "POST",
        url: "https://kahaani-ai-v2-8wex.vercel.app/v1/api/root/create-checkout-session",
        data: {
          "product": {
              "name": CityMenus[city][0],
              "image": `https://www.kahaani.site/city/${city}.png`,
              "price": CityMenus[city][3]
          }
        }
      });
      window.location.href = response.data.url;
    } catch(err) {
      console.error(err);
    }
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
                   
                    <Box position="relative" width="80%" overflow="hidden">
                      <Image src={`./city/${selectedCity}.png`} alt={CityMenus[selectedCity][0]} width="100%" />
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
                  <Button colorScheme="blue" onClick={handleCheckout}>Purchase Tour</Button>
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
              <Image src={`./city/${city}.png`} width="40vw" borderRadius="10%" />
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


function NorthIndia() {
  const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  async function handleCheckout() {
    try {
      const city: any = selectedCity;
      const response = await axios({
        method: "POST",
        url: "https://kahaani-ai-v2-8wex.vercel.app/v1/api/root/create-checkout-session",
        data: {
          "product": {
              "name": CityMenus[city][0],
              "image": `https://www.kahaani.site/city/${city}.png`,
              "price": CityMenus[city][3]
          }
        }
      });
      window.location.href = response.data.url;
    } catch(err) {
      console.error(err);
    }
  }

  const CityMenus: Record<string, any[]> = {
  "jaipur": [
    "Jaipur City Tour",
    "Experience the Pink City in all its glory. From the magnificent Amber Fort that echoes the tales of Rajput valor, to the bustling bazaars full of Rajasthani handicrafts, Jaipur is a perfect blend of heritage, culture, and royal architecture. Don't miss the iconic Hawa Mahal, and end your day with a peaceful walk around Jal Mahal by the lake.",
    [
      "Amber Fort",
      "City Palace",
      "Hawa Mahal",
      "Jantar Mantar",
      "Jal Mahal",
      "Nahargarh Fort",
      "Bapu Bazaar",
      "Johari Bazaar"
    ],
    "Rs. 900",
    "12hrs"
  ],

  "jodhpur": [
    "Jodhpur City Tour",
    "Step into the Blue City, where history meets breathtaking architecture. Marvel at the massive Mehrangarh Fort perched atop a hill, stroll through the vibrant streets of the old city, and admire the opulent Umaid Bhawan Palace. Discover local flavors in bustling markets and experience the essence of Rajasthani culture.",
    [
      "Mehrangarh Fort",
      "Umaid Bhawan Palace",
      "Jaswant Thada",
      "Clock Tower & Sardar Market",
      "Mandore Gardens",
      "Toorji Ka Jhalra (Stepwell)",
      "Rao Jodha Desert Rock Park"
    ],
    "Rs. 800",
    "10hrs"
  ],

  "udaipur": [
    "Udaipur City Tour",
    "The Venice of the East awaits with its serene lakes, majestic palaces, and charming streets. Explore the grand City Palace, enjoy a boat ride on Lake Pichola, visit the romantic Jag Mandir, and wander the quaint streets of the old city. Udaipur offers a mix of luxury, history, and breathtaking scenic views.",
    [
      "City Palace",
      "Lake Pichola",
      "Jag Mandir",
      "Saheliyon Ki Bari",
      "Bagore Ki Haveli",
      "Fateh Sagar Lake",
      "Jagdish Temple",
      "Vintage Car Museum"
    ],
    "Rs. 1000",
    "14hrs"
  ],

  "jaisalmer": [
    "Jaisalmer City Tour",
    "Explore the Golden City of Jaisalmer, a desert jewel full of history, culture, and architectural wonders. Wander through the massive Jaisalmer Fort, with its intricate havelis and bustling marketplaces. Experience the magic of Sam Sand Dunes with a camel safari, enjoy Rajasthani folk performances, and admire the ornate Patwon Ki Haveli and Salim Singh Ki Haveli.",
    [
      "Jaisalmer Fort",
      "Patwon Ki Haveli",
      "Salim Singh Ki Haveli",
      "Sam Sand Dunes",
      "Bada Bagh",
      "Gadisar Lake",
      "Jain Temples",
      "Nathmal Ki Haveli"
    ],
    "Rs. 1000",
    "2 Days"
  ]
};

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
                   
                    <Box position="relative" width="80%" overflow="hidden">
                      <Image src={`./city/${selectedCity}.png`} alt={CityMenus[selectedCity][0]} width="100%" />
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
        
                  <Button colorScheme="blue" onClick={handleCheckout}>Purchase Tour</Button>
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
        <Flex textStyle="4xl" mt="9vw" letterSpacing="-0.3vw" mb="2vw"><Text color={"orange"} mr={"2vw"}>North</Text> India</Flex>
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
              <Image src={`./city/${city}.png`} width="40vw" borderRadius="10%" />
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

function SouthIndia() {
    const [open, setOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState<string | null>(null);

  async function handleCheckout() {
    try {
      const city: any = selectedCity;
      const response = await axios({
        method: "POST",
        url: "https://kahaani-ai-v2-8wex.vercel.app/v1/api/root/create-checkout-session",
        data: {
          "product": {
              "name": CityMenus[city][0],
              "image": `https://www.kahaani.site/city/${city}.png`,
              "price": CityMenus[city][3]
          }
        }
      });
      window.location.href = response.data.url;
    } catch(err) {
      console.error(err);
    }
  }

  const CityMenus: Record<string, any[]> = {
  "mysore": [
    "Mysore City Tour",
    "Explore the royal city of Mysore, famed for its majestic palaces, vibrant markets, and rich cultural heritage. Marvel at the grandeur of Mysore Palace, wander the colorful Devaraja Market, and enjoy the serenity of Chamundi Hill and St. Philomena's Church. Don't miss the evening palace illumination which adds a magical charm to the city.",
    [
      "Mysore Palace",
      "Chamundi Hill",
      "Brindavan Gardens",
      "St. Philomena's Church",
      "Devaraja Market",
      "Rail Museum",
      "Jaganmohan Palace",
      "Karanji Lake"
    ],
    "Rs. 700",
    "12hrs"
  ],

  "goa": [
    "Goa Beach & Heritage Tour",
    "Discover the sunny beaches, Portuguese heritage, and vibrant nightlife of Goa. Relax on Baga and Anjuna beaches, explore the UNESCO heritage churches of Old Goa, and wander the lively markets for local handicrafts. Experience Goan cuisine, and enjoy water sports along the scenic coastline.",
    [
      "Baga Beach",
      "Anjuna Beach",
      "Fort Aguada",
      "Basilica of Bom Jesus",
      "Se Cathedral",
      "Calangute Market",
      "Chapora Fort",
      "Dudhsagar Waterfalls"
    ],
    "Rs. 1200",
    "1 Day"
  ],

  "bangalore": [
    "Bangalore City Tour",
    "Explore the Silicon Valley of India, blending modern tech with historical charm. Visit Lalbagh Botanical Garden, admire Bangalore Palace, enjoy Cubbon Park, and experience the vibrant street food and markets. Discover local culture at temples, museums, and craft hubs.",
    [
      "Bangalore Palace",
      "Lalbagh Botanical Garden",
      "Cubbon Park",
      "Vidhana Soudha",
      "Tipu Sultan's Summer Palace",
      "ISKCON Temple",
      "Commercial Street",
      "UB City Mall"
    ],
    "Rs. 800",
    "10hrs"
  ],

  "shivmogga": [
    "Shivamogga Nature & Adventure Tour",
    "Explore the lush green landscapes, waterfalls, and rich biodiversity of Shivamogga. Trek through the Western Ghats, visit Jog Falls, enjoy local temples, and experience the serene beauty of Sakrebailu Elephant Camp and other scenic spots.",
    [
      "Jog Falls",
      "Sakrebailu Elephant Camp",
      "Keladi Shivappa Nayaka Palace",
      "Tyavarekoppa Lion and Tiger Safari",
      "Kumara Parvata Trek",
      "Gajanur Dam",
      "Kodachadri Hills",
      "Shettihalli Church Ruins"
    ],
    "Rs. 900",
    "2 Days"
  ]
};

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
                   
                    <Box position="relative" width="80%"  overflow="hidden" >
                      <Image src={`./city/${selectedCity}.png`} alt={CityMenus[selectedCity][0]} width="100%" />
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
                  <Button colorScheme="blue" onClick={handleCheckout}>Purchase Tour</Button>
                </Flex>
              </Drawer.Footer>

              <Drawer.CloseTrigger asChild>
                <CloseButton size="lg" />
              </Drawer.CloseTrigger>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>

    
      <Flex flexDirection="column" mt="0vw" mr="5.05vw" ml="5.05vw" mb={"25vw"} fontWeight="500" letterSpacing="-0.2vw">
        <Flex textStyle="4xl" mt="9vw" letterSpacing="-0.3vw" mb="2vw"><Text color={"blue.500"} mr={"2vw"}>South</Text> India</Flex>
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
              <Image src={`./city/${city}.png`} width="40vw" borderRadius="10%" />
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

function Button1() {
   
    return (
        <></>
  )
}

export default City