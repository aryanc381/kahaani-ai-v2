import { Box, Button, Flex, Image, Status, Text } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@/components/ui/color-mode';
import { VscActivateBreakpoints, VscArchive, VscTelescope, VscVr } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { ArcTimeline } from "../../components/ui/arc-timeline";
import { Globe } from '@/components/ui/globe';
import { Highlighter } from "@/components/ui/highlighter";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";

import { NumberTicker } from "@/components/ui/number-ticker";



 
function Showcase() {
  return (
    <Flex>
   
      <Flex direction={"column"}>
          <Navbar />
          <Header />
          <PixelScroll />
          <Arc />
          <ScrollText />
          
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
          <Text letterSpacing={{ base: "-0.2vw" }} fontSize={{ base: "6vw", md: "2vw" }}>KahaaniAI</Text>
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
  const navigate = useNavigate();
  return (
    <Flex  flexDirection={"column"} mt={{base: "15vw"}} mr={{base: "5.05vw"}} ml={{base: "5.05vw"}} fontWeight={{base: "500"}} letterSpacing={{base: "-0.2vw"}} >
      <Flex mt={"1vw"} overflowX="auto" flexWrap="nowrap" gap="0.5vw" css={{ "::-webkit-scrollbar": { display: "none" }, scrollbarWidth:"none", "-webkit-overflow-scrolling": "touch"}} >
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "0vw"}}>
          <Image src="./Gradient (1).svg" width={{base: "80vw"}} height={{base: "120vw"}} borderRadius={{base: "15vw"}} onClick={() => {navigate('/city')}}/>
          <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">City</Text>
        </Box>
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
            <Image src="./museums.svg" width={{base: "80vw"}} height={{base: "120vw"}} borderRadius={{base: "15vw"}} onClick={() => {navigate('/city')}}/>
            <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Monuments</Text>
        </Box>
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
            <Image src="./Gradient3.png" width={{base: "80vw"}} height={{base: "120vw"}} borderRadius={{base: "15vw"}} onClick={() => {navigate('/city')}} />
            <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Museums</Text>
        </Box>
        <Box position={{base: "relative"}} flex={{base: "0 0 auto"}} ml={{base: "3vw"}}>
            <Image src="./budget.png" width={{base: "80vw"}} height={{base: "120vw"}} borderRadius={{base: "15vw"}} onClick={() => {navigate('/city')}}/>
            <Text position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)" color="#fff" textStyle="2xl">Budget</Text>
        </Box>
        
        
      </Flex>
    </Flex>
  );
}

function ScrollText() {

  const overlayColor = useColorModeValue("rgba(246, 246, 246, 1)", "rgba(23, 23, 23, 1)");
  return(
    <Flex direction={"column"} justifyContent={"center"} mt={"1vw"}>
      <Flex mt={"5vw"} fontSize={"10vw"} gap={"2vw"} justifyContent={"center"}>  
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
          <Text letterSpacing={"-0.2vw"} fontSize={"4vw"}>People</Text>
        </Flex>
      </Flex>
      <Flex justifyContent={"center"} alignItems={"center"} width={"100vw"} mt={"4vw"}>
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
    <ArcTimeline data={data} />
  )
}





export default Showcase;