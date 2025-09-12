import { Avatar, Button, Flex, HStack, Menu, Portal, Text } from "@chakra-ui/react"


function Navbar() {
  return (
    <Flex flexDirection={"column"} mt={{base: "2vw"}} mr={{base: "5vw"}} ml={{base: "5vw"}}>
      <Flex justifyContent={"space-between"}>
        <Text textStyle={{base: "3xl"}} mt={{base: "1.5vw", md: "0.5vw"}} letterSpacing={{base: "-0.3vw"}}>Hello, Aryan.</Text>
        <HStack gap="4">
      <Avatar.Root colorPalette="green">
        <Avatar.Fallback />
        <Avatar.Image src="https://bit.ly/broken-link" />
      </Avatar.Root>
      </HStack>
      </Flex>
      
    </Flex>
  )
}

export default Navbar