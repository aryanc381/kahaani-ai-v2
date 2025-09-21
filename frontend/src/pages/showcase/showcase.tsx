import { Box, Button, Flex, Status, Text } from '@chakra-ui/react';
import { useColorMode, useColorModeValue } from '@/components/ui/color-mode';
import { VscTelescope, VscVr } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
import { ArcTimeline } from "../../components/ui/arc-timeline";
import { Globe } from '@/components/ui/globe';

 
function Showcase() {
  return (
    <Flex>
      <Flex direction={"column"}>
          <Navbar />
         
          
          <Header />
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
      <Flex width="full" backgroundColor={overlayColor} position="fixed" top={0} px={{ base: "5vw", md: "2vw" }} py={{ base: "4vw", md: "1.5vw" }}  justifyContent="space-between" alignItems="center">
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

function GlobeDemo() {
  return (
    <div className="relative flex size-full h-[85vw] max-w-md items-center justify-center overflow-hidden rounded-lg border bg-background px-40 pb-40 pt-8 md:pb-60">
      <Globe className="" />
    </div>
  );
}

function Header() {
  return(
    <Flex>
      <Flex mt={"10vw"} position={"relative"}></Flex>
    <Flex  alignItems={"center"} direction={"column"} mt={"16vw"} justifyContent={"center"} mr={"2vw"} ml={"2vw"}>
      <GlobeDemo />
      <Text fontSize={"7vw"} letterSpacing={"-0.4vw"} mt={"5vw"} textAlign={{base: "center", md: ""}}>Your Personal Guide to Authentic Indian Monuments.</Text>
      <Flex mt={"3vw"}>
            <Status.Root size={"md"} width="15vw" colorPalette="green">
              <Status.Indicator />
              Live
            </Status.Root>
        <Button variant={"solid"}>Take a tour <VscTelescope /></Button>
      </Flex>
      <ArcTimeline data={data} />
     
      
    </Flex>
    </Flex>
  )
}

const data = [
  {
    time: "2025",
    steps: [
      { icon: <span>🚀</span>, content: "Launched v1" },
      { icon: <span>✨</span>, content: "Improved UX" },
    ],
  },
  {
    time: "2026",
    steps: [{ icon: <span>📈</span>, content: "Growth" }],
  },
];

export default Showcase;