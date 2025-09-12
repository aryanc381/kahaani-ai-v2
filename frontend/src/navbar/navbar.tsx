import { Avatar, Flex, HStack, Image, Text } from "@chakra-ui/react"


function Navbar() {
  return (
    <Flex flexDirection={"column"} mt={{base: "2vw"}} mr={{base: "5vw"}} ml={{base: "5vw"}}>
      <Flex justifyContent={"space-between"}>
        
        <Image src="./logo.png" width={{base: "15vw"}}/>
        <Text textStyle={{base: "3xl"}} mt={{base: "2.5vw", md: "0.5vw"}} letterSpacing={{base: "-0.3vw"}} width={{base: "37vw"}}>Hello, Aryan.</Text>
        <HStack gap="4" maxWidth={{base: "15vw"}}>
      <Avatar.Root colorPalette="green">
        <Avatar.Fallback />
        <Avatar.Image src="https://bit.ly/broken-link" />
      </Avatar.Root>
      </HStack>
      </Flex>
      
    </Flex>
  )
}

export default Navbar;