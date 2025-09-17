import { Globe } from '@/components/ui/globe';
import { Box, Button, Flex, Text } from '@chakra-ui/react';
import { ProgressiveBlur } from "../../components/ui/progressive-blur";
import { useColorMode } from '@/components/ui/color-mode';
import { VscVr } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';
 
function Showcase() {
  return (
    <Flex direction={"column"}>
        <Globe />
     
        <Navbar />
        <ProgressiveBlur height="10%" position="bottom" />
        
       
    </Flex>
  )
}



function Navbar() {
  const { toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  return (
    <Flex>
      <ProgressiveBlur height="30%" position="top" />

      <Flex width="full" position="fixed" zIndex={100} top={0} px={{ base: "5vw", md: "2vw" }} py={{ base: "4vw", md: "1.5vw" }}  justifyContent="space-between" alignItems="center">
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


export default Showcase