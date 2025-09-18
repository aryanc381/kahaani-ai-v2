import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { ProgressiveBlur } from "../../components/ui/progressive-blur";
import { useColorMode, useColorModeValue } from '@/components/ui/color-mode';
import { VscTelescope, VscVr } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

 
function Showcase() {
  return (
    <Flex>
      <Flex direction={"column"}>
          <Navbar />
          <ProgressiveBlur height="15%" position="bottom" />
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

function Header() {
  const navigate = useNavigate();
  return(
    <Flex>
    <Flex alignItems={"center"} direction={"column"} mt={"65vw"} justifyContent={"center"} mr={"2vw"} ml={"2vw"}>
      <Text fontSize={"7vw"} letterSpacing={"-0.4vw"} textAlign={{base: "center", md: ""}}>Your Personal Guide to Authentic Indian Monuments.</Text>
      <Button variant="subtle" mt={"2vw"} borderRadius="3vw" px="6vw" py="4" onClick={() => {navigate('/home')}}>Talk with Vaishvi<VscTelescope /></Button>
    </Flex>
    
    </Flex>
  )
}

export default Showcase;