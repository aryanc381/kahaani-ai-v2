import { Flex, HStack, Image, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { VscReactions } from "react-icons/vsc";




function Navbar() {
    const navigate = useNavigate();
  return (
    <Flex flexDirection={"column"} mt={{base: "2vw"}} mr={{base: "5vw"}} ml={{base: "5vw"}}>
      <Flex justifyContent={"space-between"}>
        
        <Image src="./logo.png" width={{base: "13vw"}} onClick={() => {navigate('/home')}}/>
        <Text textAlign={"center"} textStyle={{base: "2xl"}} ml={{base:"-1.5vw"}} mt={{base: "3.5vw", md: "0.5vw"}} letterSpacing={{base: "-0.3vw"}} width={{base: "60vw"}}>KahaaniAI</Text>
        <HStack gap="4" maxWidth={{base: "15vw"}}>
      <VscReactions size={"10vw"} />
      </HStack>
      </Flex>
      
    </Flex>
  )
}

export default Navbar;