import { Globe } from '@/components/ui/globe';
import { Button, Flex, Text } from '@chakra-ui/react';
import { ProgressiveBlur } from "../../components/ui/progressive-blur";
import { Iphone15Pro } from "../../components/ui/iphone-15-pro";
 
function Showcase() {
  return (
    <Flex direction={"column"}>
        <Globe />
        <Iphone15ProDemo />
        <Navbar />
       
    </Flex>
  )
}



function Navbar() {
  return (
    <Flex>
      <ProgressiveBlur height="20%" position="top" />

      <Flex width="full" position="fixed" zIndex={100} top={0} px={{ base: "3vw", md: "2vw" }} py={{ base: "4vw", md: "1.5vw" }}  justifyContent="space-between" alignItems="center">
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

function Iphone15ProDemo() {
  return (
    <Flex position={"relative"} mt={"40vw"}>
      <Iphone15Pro className="size-[100vw]" src='./iphone15.jpg' />
    </Flex>
  );
}

export default Showcase