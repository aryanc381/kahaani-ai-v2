import { Globe } from '@/components/ui/globe';
import { Button, Flex, Text } from '@chakra-ui/react';
import { ProgressiveBlur } from "../../components/ui/progressive-blur";
 
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
  return (
    <Flex>
      <ProgressiveBlur height="30%" position="top" />

      <Flex width="full" position="fixed" zIndex={100} top={0} px={{ base: "5vw", md: "2vw" }} py={{ base: "4vw", md: "1.5vw" }}  justifyContent="space-between" alignItems="center">
        <Text letterSpacing={{ base: "-0.2vw" }} fontSize={{ base: "6vw", md: "2vw" }}>
          KahaaniAI
        </Text>
        <Flex gap={"1.5vw"}>
          <Button variant={"ghost"} letterSpacing={{ base: "-0.1vw" }} fontSize={{ base: "4vw", md: "1.8vw" }}>Signup</Button>
          <Button variant={"subtle"} colorPalette={"green"} letterSpacing={{ base: "-0.1vw" }} fontSize={{ base: "4vw", md: "1.8vw" }}>Login</Button>
        </Flex>
        
      </Flex>
    </Flex>
  );
}


export default Showcase