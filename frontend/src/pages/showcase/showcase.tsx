import { Box, Button, Card, Flex, Heading, Image, Kbd, Status, Text } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@/components/ui/color-mode';
import { VscAccount, VscActivateBreakpoints, VscArchive, VscLocation, VscPlayCircle, VscSettingsGear, VscTelescope, VscVr } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { ArcTimeline } from "../../components/ui/arc-timeline";
import { Globe } from '@/components/ui/globe';
import { Highlighter } from "@/components/ui/highlighter";


import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

import { NumberTicker } from "@/components/ui/number-ticker";
import { useState } from 'react';



 
function Showcase() {
  return (
    <Flex>
   
      <Flex direction={"column"}>
          <Navbar />
          <Header />
          <Arc />
          <Features />
          <ScrollText />
          <Preview />
          <PixelScroll />
          <Creators />
          <Footer />
      </Flex>
    </Flex>
  )
}



function Navbar() {
  const { toggleColorMode } = useColorMode();
  const overlayColor = useColorModeValue("rgba(255, 255, 255, 1)", "rgba(0, 0, 0, 1)");
  const navigate = useNavigate();
  return (
    <Flex>
      <Flex zIndex={"400"} width="full" backgroundColor={overlayColor} position="fixed" top={0} px={{ base: "5vw", md: "2vw" }} py={{ base: "4vw", md: "1.5vw" }}  justifyContent="space-between" alignItems="center">
        <Flex>
          <Text letterSpacing={{ base: "-0.2vw" }} fontSize={{ base: "6vw", md: "2vw" }} >KahaaniAI</Text>
          <Box ml={{base: "2vw"}} mt={{base: "0.5vw"}}>
            <VscVr size="8vw" onClick={toggleColorMode} />
          </Box>
        </Flex>
        <Flex gap={"1.5vw"}>
          <Button variant={"ghost"} letterSpacing={{ base: "-0.1vw" }} fontSize={{ base: "4vw", md: "1.8vw" }} onClick={() => {navigate('/signup')}}>Signup</Button>
          <Button variant={"subtle"} colorPalette={"green"} letterSpacing={{ base: "-0.1vw" }} fontSize={{ base: "4vw", md: "1.8vw" }} borderRadius={{base: "2vw"}} onClick={() => {navigate('/login')}}>Login</Button>
        </Flex>
        
      </Flex>
    </Flex>
  );
}

export function NumberTickerDemo() {
  return (
    <NumberTicker
      value={100}
      className="whitespace-pre-wrap text-8xl font-medium tracking-tighter text-black dark:text-white"
    />
  );
}

function GlobeDemo() {
  return (
    <div className="z-500 relative flex size-full h-[90vw] max-w-md items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
      <Globe className="" />
    </div>

    // <Flex
    //   width={{ base: '85vw', md: '30vw' }}   // full width on phone, smaller on desktop
    //   height={{ base: '85vw', md: '30vw' }}  // keep square
    //   justify="center"
    //   align="center"
    //   mx="auto"
    // >
    //   <DomeGallery
    //     fit={0.7}                   // smaller than 1 to fit mobile screen
    //     maxRadius={300}             // limit dome radius on phones
    //     fitBasis="min"              // base on smaller dimension
    //   />
    // </Flex>
    
  );
}

function Header() {
  const navigate = useNavigate();

  return (
    <Flex>
      <Flex alignItems={"center"} direction={"column"} mt={"30vw"} justifyContent={"center"} mr={"2vw"} ml={"2vw"}>
        <GlobeDemo />
        
        <Text fontSize={"7vw"} letterSpacing={"-0.4vw"} mt={"5vw"} textAlign={{ base: "center", md: "" }}>
          <p>
            Your{" "}
            <Highlighter action="underline" color="#FF9800" animationDuration={1000}>
              {" "} Personal Guide{" "}
            </Highlighter>{" "}
            for Authentic Indian Monuments.
          </p>
        </Text>


        <Flex mt={"3vw"}>
          <Status.Root size={"md"} width="14vw" colorPalette="green">
            <Status.Indicator />
            Live
          </Status.Root>

          <Button borderRadius={"4vw"} variant={"solid"} onClick={() => { navigate("/signup"); }}>
            Take a free tour <VscTelescope />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}

function PixelScroll() {
  const overlayColor = useColorModeValue("rgba(246, 246, 246, 1)", "rgba(23, 23, 23, 1)");
  const bColor = useColorModeValue("rgba(118, 118, 118, 1)", "rgba(59, 59, 59, 1)");
  return (
    <Flex flexDirection="column" mt="17vw"  ml="4vw" fontWeight="500" letterSpacing="-0.2vw" w="90vw" >
      <Text fontWeight="300" textAlign="center" textStyle="3xl" mt="9vw" letterSpacing="-0.3vw" mb="5.5vw">
        The KahaaniAI Project
      </Text>

      <Flex height={"120vw"} ml={"4vw"} mr={"1.85vw"} mt="1vw" maxW="100%" overflowX="auto" flexWrap="nowrap" gap="3vw" css={{ "::-webkit-scrollbar": { display: "none" }, scrollbarWidth: "none", "-webkit-overflow-scrolling": "touch" }}>
        <Box flex="0 0 auto">
          <Card.Root size="lg" maxWidth={"75vw"} backgroundColor={overlayColor} border={"0.49vw"} borderColor={bColor} borderRadius={"10vw"} height={"110vw"}>
            <Card.Header>
              <Heading fontSize={"5.5vw"} fontWeight={"200"}>
                <Flex gap={"2vw"}>
                  <VscTelescope style={{marginTop: "1vw"}} />
                  <Text>What is Kahaani</Text>
                </Flex>
              </Heading>
            </Card.Header>
            <Card.Body color="fg.muted" fontSize={"4.5vw"}>
              <Flex direction={"column"} gap={"13vw"}>
                <Text letterSpacing={"-0.1vw"} fontWeight={"200"}>
                KahaaniAI is an AI-driven tourism platform that provides tourists with authentic, fact-checked, and culturally sensitive information about Indian monuments. 
              </Text>
              <Text>It combines virtual AI tour guides with verified human guides to enhance travel experiences.</Text>
              </Flex>
              
              
            </Card.Body>
          </Card.Root>
        </Box>

        <Box flex="0 0 auto">
          <Card.Root size="lg" maxWidth={"75vw"} backgroundColor={overlayColor} border={"0.49vw"} borderColor={bColor} borderRadius={"10vw"} height={"110vw"}>
            <Card.Header>
              <Heading fontSize={"5.5vw"} fontWeight={"200"}>
                <Flex gap={"2vw"}>
                  <VscAccount style={{marginTop: "1vw"}} />
                  <Text>Why we made Kahaani</Text>
                </Flex>
              </Heading>
            </Card.Header>
            <Card.Body color="fg.muted" fontSize={"4.5vw"}>
              <Flex direction={"column"} gap={"12vw"}>
                <Text letterSpacing={"-0.1vw"} fontWeight={"200"}>
                  We created KahaaniAI to address the issues of unreliable, rushed, or biased human tour guides who often spread misinformation or behave unprofessionally.
                </Text>
              
                <Text>
                  Our goal is to ensure tourists have safe, respectful, and accurate cultural experiences.
                </Text>
              </Flex>
              
              
            </Card.Body>
          </Card.Root>
        </Box>

        <Box flex="0 0 auto">
          <Card.Root size="lg" maxWidth={"75vw"} backgroundColor={overlayColor} border={"0.49vw"} borderColor={bColor} borderRadius={"10vw"} height={"110vw"}>
            <Card.Header>
              <Heading fontSize={"5.5vw"} fontWeight={"200"}>
                <Flex gap={"2vw"}>
                  <VscSettingsGear style={{marginTop: "1vw"}} />
                  <Text>How we made Kahaani</Text>
                </Flex>
              </Heading>
            </Card.Header>
            <Card.Body color="fg.muted" fontSize={"4.5vw"}>
              <Flex direction={"column"} gap={"5vw"}>
                <Text letterSpacing={"-0.1vw"} fontWeight={"200"}>
                KahaaniAI is powered by an Automatic Speech Recognition (ASR), Retrieval-Augmented Generation (RAG), and Text-to-Speech (TTS) pipeline, enabling seamless real-time voice interactions.
              </Text>
              <Text>The platform is built on React and React Native to ensure accessibility across web and mobile.</Text>
              </Flex>
              
              
            </Card.Body>
          </Card.Root>
        </Box>
      </Flex>
    </Flex>
  );
}

function ScrollText() {

  const overlayColor = useColorModeValue("rgba(246, 246, 246, 1)", "rgba(23, 23, 23, 1)");
  return(
    <Flex direction={"column"} justifyContent={"center"} mt={"20vw"}>
      <Text textAlign={{base: "center"}} textStyle={{base: "3xl"}} mt={{base: "9vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "5.5vw"}} >Deployed AI Tours</Text>
      <Flex fontSize={"10vw"} gap={"2vw"} justifyContent={"center"}>  
        
        <Flex lineHeight={"10vw"} alignItems={"center"} direction={"column"} width={"29vw"} backgroundColor={overlayColor} pt={"3vw"} pb={"1vw"} borderRadius={"6vw"}> 
          <NumberTicker value={21} className='tracking-[-0.4vw]' />
          <Text letterSpacing={"-0.2vw"} fontSize={"4vw"}>Cities</Text>
        </Flex>
        <Flex lineHeight={"10vw"} alignItems={"center"} direction={"column"} width={"29vw"} backgroundColor={overlayColor} pt={"3vw"} pb={"1vw"} borderRadius={"6vw"}>
          <Text><NumberTicker value={30} className='tracking-[-0.4vw]' /></Text>
          <Text letterSpacing={"-0.2vw"} fontSize={"4vw"}>Monuments</Text>
        </Flex>
        <Flex lineHeight={"10vw"} alignItems={"center"} direction={"column"} width={"29vw"} backgroundColor={overlayColor} pt={"3vw"} pb={"1vw"} borderRadius={"6vw"}>
          <NumberTicker value={14} className='tracking-[-0.4vw]' />
          <Text letterSpacing={"-0.2vw"} fontSize={"4vw"}>Users</Text>
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} width={"80vw"} ml={"10vw"} mr={"10vw"} mt={"4vw"}>
        <ScrollVelocityContainer>
        <ScrollVelocityRow baseVelocity={3} direction={1}>
          <Flex justifyContent={"center"} gap={"10vw"} fontSize={"7vw"} fontWeight={900} color={"#969490"} letterSpacing={"-0.7vw"}>
            <Text>PNQ</Text>
            <Text>BOM</Text>
            <Text>NGP</Text>
            <Text>UDR</Text>
            <Text mr={"10vw"}>NSK</Text>
          </Flex>
        </ScrollVelocityRow>
        <ScrollVelocityRow baseVelocity={3} direction={-1}>
          <Flex justifyContent={"center"} gap={"7vw"} fontSize={"7vw"} fontWeight={900} color={"#969490"} letterSpacing={"-0.7vw"}>
            <Text>BLR</Text>
            <Text>JOH</Text>
            <Text>GOA</Text>
            <Text>MYQ</Text>
            <Text mr={"10vw"}>JAI</Text>
          </Flex>
        </ScrollVelocityRow>
      </ScrollVelocityContainer>
      </Flex>
    </Flex>
  )
}

const data = [
  {
    time: "2025",
    steps: [
      { icon: <span><VscTelescope size={"5vw"}/></span>, content: "Launched v1" },
      { icon: <span><VscArchive size={"5vw"}/></span>, content: "Improved UX" },
    ],
  },
  {
    time: "2026",
    steps: [{ icon: <span><VscActivateBreakpoints size={"5vw"}/></span>, content: "Growth" }],
  },
];
function Arc() {
  return(
    <Flex direction={"column"}>
      <Text fontWeight={{base: "300"}} textAlign={{base: "center"}} textStyle={{base: "3xl"}} mt={{base: "27vw"}} letterSpacing={{base: "-0.3vw"}} mb={{base: "5.5vw"}} >Project Timeline</Text>
      <Flex mt={"-15vw"} mr={"5vw"} ml={"5vw"}>
        <ArcTimeline data={data} />
      </Flex>
        
      
    </Flex>
    
  )
}

function Preview() {
  const [index, setIndex] = useState(0);

  const images = ["./imageK2.png", "./Gradient2.png", "./imageK2.png"];

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Flex flexDirection="column" mt="16vw" ml="4vw" fontWeight="500" letterSpacing="-0.2vw" w="90vw">
      <Text
        fontWeight="300"
        textAlign="center"
        textStyle="3xl"
        mt="9vw"
        letterSpacing="-0.3vw"
        mb="5.5vw"
      >
        Preview
      </Text>

      <Flex
        justifyContent="center"
        alignItems="center"
        mt="1vw"
      >
        <Box>
          <Image ml={"1vw"} src={images[index]} width={"70vw"} />
        </Box>
      </Flex>

      <Flex justifyContent="center" ml={"1vw"} mt="4vw" gap="2vw">
        <Button onClick={handlePrev} variant={"subtle"} borderRadius={"10vw"} _hover={{ opacity: 0.8 }}>
         ← &nbsp; Prev 
        </Button>
        <Button onClick={handleNext} variant={"subtle"} borderRadius={"10vw"} _hover={{ opacity: 0.8 }}>
          Next &nbsp; →
        </Button>
      </Flex>
    </Flex>
  );
}

function Features() {
  const overlayColor = useColorModeValue("rgba(246, 246, 246, 1)", "rgba(23, 23, 23, 1)");
  const bColor = useColorModeValue("rgba(118, 118, 118, 1)", "rgba(59, 59, 59, 1)");
  return (
    <Flex flexDirection="column"  ml="4vw" fontWeight="500" letterSpacing="-0.2vw" w="90vw" mt={"-5vw"}>
      <Text fontWeight="300" textAlign="center" textStyle="3xl" mt="9vw" letterSpacing="-0.3vw" mb="5.5vw">
        Features
      </Text>

      <Flex ml={"4vw"} mr={"1.85vw"} mt="1vw" maxW="100%" overflowX="auto" flexWrap="nowrap" gap="3vw" css={{ "::-webkit-scrollbar": { display: "none" }, scrollbarWidth: "none", "-webkit-overflow-scrolling": "touch" }}>
        <Box flex="0 0 auto">
          <Card.Root size="lg" maxWidth={"75vw"} backgroundColor={overlayColor} border={"0.49vw"} borderColor={bColor} borderRadius={"10vw"} height={"110vw"}>
            <Card.Header>
              <Heading fontSize={"5.5vw"} fontWeight={"200"}>
                <Flex gap={"2vw"}>
                  <VscPlayCircle style={{marginTop: "1.2vw"}} />
                  <Text>Listening & Speaking AI</Text>
                </Flex>
              </Heading>
            </Card.Header>
            <Card.Body color="fg.muted" fontSize={"4.5vw"}>
              <Flex direction={"column"} gap={"13vw"}>
                <Text letterSpacing={"-0.1vw"} fontWeight={"200"}>
                A conversational AI that listens while it talks, allowing you to interact naturally without ever waiting. 
              </Text>
              <Text>Speak freely at any moment, get instant, seamless responses, and experience a fully immersive, real-time conversation like never before.</Text>
              </Flex>
              
              
            </Card.Body>
          </Card.Root>
        </Box>

        <Box flex="0 0 auto">
          <Card.Root size="lg" maxWidth={"75vw"} backgroundColor={overlayColor} border={"0.49vw"} borderColor={bColor} borderRadius={"10vw"} height={"110vw"}>
            <Card.Header>
              <Heading fontSize={"5.5vw"} fontWeight={"200"}>
                <Flex gap={"2vw"}>
                  <VscLocation style={{marginTop: "1.1vw"}} />
                  <Text>Real-time Geolocation</Text>
                </Flex>
              </Heading>
            </Card.Header>
            <Card.Body color="fg.muted" fontSize={"4.5vw"}>
              <Flex direction={"column"} gap={"12vw"}>
                <Text letterSpacing={"-0.1vw"} fontWeight={"200"}>
                  Track your exact location during tours and receive live, context-aware guidance from AI or verified local guides.
                </Text>
              
                <Text>
                  Navigate seamlessly through monuments and historical sites with precise directions and instant updates for a truly immersive experience.
                </Text>
              </Flex>
              
              
            </Card.Body>
          </Card.Root>
        </Box>

        <Box flex="0 0 auto">
          <Card.Root size="lg" maxWidth={"75vw"} backgroundColor={overlayColor} border={"0.49vw"} borderColor={bColor} borderRadius={"10vw"} height={"110vw"}>
            <Card.Header>
              <Heading fontSize={"5.5vw"} fontWeight={"200"}>
                <Flex gap={"2vw"}>
                  <VscSettingsGear style={{marginTop: "1vw"}} />
                  <Text>Verified Information</Text>
                </Flex>
              </Heading>
            </Card.Header>
            <Card.Body color="fg.muted" fontSize={"4.5vw"}>
              <Flex direction={"column"} gap={"5vw"}>
                <Text letterSpacing={"-0.1vw"} fontWeight={"200"}>
                Access accurate, fact-checked details about monuments and sites, curated from trusted sources.
              </Text>
              <Text>Ensure every piece of information you receive, whether from AI or guides is reliable, culturally sensitive, and historically precise.</Text>
              </Flex>
              
              
            </Card.Body>
          </Card.Root>
        </Box>
      </Flex>
    </Flex>
  );
}

function Creators() {
  const bColor = useColorModeValue("rgba(246, 246, 246, 1)", "rgba(25, 25, 25, 1)");
  const buttonColor = useColorModeValue("rgba(255, 255, 255, 0.68)", "rgba(16, 16, 16, 1)");
  const contributors = [
    { 
      name: "Aryan Chauhan", 
      role: "Fullstack AI Developer", 
      img: "./people/aryan.png", 
      link: "https://www.aryancodes.dev" 
    },
    { 
      name: "Aditya Yenpure", 
      role: "Research & Ops", 
      img: "./people/yenpure.png", 
      link: "https://www.linkedin.com/in/aditya-yenpure-5089832b1/?originalSubdomain=in" 
    },
    { 
      name: "Prof. Deepa Nath", 
      role: "Project Mentor", 
      img: "./people/deepa.png", 
      link: "https://research.mitwpu.edu.in/researcher/deepa-nath" 
    },
    {
      name: "Vaishvi Patel",
      role: "AI Voice Specialist",
      img: "./people/vaishvi.png",
      link: "https://www.linkedin.com/in/vaishvi-patel-36119b328/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
    }
  ];

  return (
    <Flex flexDirection="column" mt="10vw" ml="4vw" fontWeight="500" letterSpacing="-0.2vw" w="90vw">
      <Text
        fontWeight="300"
        textAlign="center"
        textStyle="3xl"
        mt="9vw"
        letterSpacing="-0.3vw"
        mb="5.5vw"
      >
        Creators
      </Text>

      <Flex direction="column" gap="5vw">
        {contributors.map((c, idx) => (
          <Card.Root
            mr={"3vw"}
            ml={"4vw"}
            borderRadius={"8vw"}
            key={idx}
            p="4vw"
            display="flex"
            gap="2vw"
            border={"0vw"}
            backgroundColor={bColor}
          >
            <Flex direction={"row"}>
              <Image src={c.img} width="20vw" height="20vw" borderRadius="50%" />
              <Flex direction="column" flex="1" ml={"5vw"} mt={"3vw"}>
                <Text fontWeight="300" fontSize="5vw">{c.name}</Text>
                <Text fontWeight="400" fontSize="4vw" color="gray.500" width={"40vw"}>{c.role}</Text>
              </Flex>
              <Button
                mt="4vw"
                alignSelf="flex-start"
                variant="subtle"
                backgroundColor={buttonColor}
                borderRadius={"100vw"}
                width={"10vw"}
                height={"10vw"}
                onClick={() => window.open(c.link, "_blank")} // opens link in new tab
              >
                →
              </Button>
            </Flex>
          </Card.Root>
        ))}
      </Flex>
    </Flex>
  );
}

function Footer() {
  const navigate = useNavigate();
  return(
    <Flex>
      <Card.Root size="sm" width={"90vw"}  mt={"25vw"} mr={"5vw"} ml={"5vw"} borderRadius={"8vw"} pb={"3vw"}>
        <Card.Body>
          <Flex justifyContent={"space-between"}>
          <Flex direction={"column"}>
            <Text fontSize={"10vw"} fontWeight={"300"} letterSpacing={"-0.5vw"}>KahaaniAI®</Text>
            <Flex gap={"1.5vw"}>
              <Kbd width={"20vw"}>Phase II</Kbd>
              <Kbd colorPalette={"green"} variant={"raised"} width={"20vw"}>
                <Status.Root size={"md"} width="14vw" colorPalette="green" ml={"1vw"}>
                  <Status.Indicator />Live
                </Status.Root>
              </Kbd>
              
            </Flex>
            
            
          </Flex>
            <Flex direction={"column"}>
              <Button
                mt={"3vw"}
                fontSize={"4vw"}
                borderRadius={"4vw"}
                colorScheme="whatsapp"
                onClick={() => {
                  const phone = "919049122622"; // country code + number
                  const message = encodeURIComponent("Hey, I checked Kahaani, can we talk?");
                  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
                }}
              >
                Contact Us
              </Button>
              <Button variant={"subtle"} borderRadius={"4vw"} textAlign={"center"} mt={"2vw"} onClick={() => {navigate('/signup')}}>Signup</Button>
              <Button variant={"subtle"} borderRadius={"4vw"} textAlign={"center"} mt={"2vw"} onClick={() => {navigate('/login')}}>Login</Button>
              <Button variant={"subtle"} borderRadius={"4vw"} textAlign={"center"} mt={"2vw"} onClick={() => {navigate('/home')}}>Demo</Button>
            </Flex>
          
          </Flex>
        </Card.Body>
      </Card.Root>
    </Flex>
  )
}

export default Showcase;