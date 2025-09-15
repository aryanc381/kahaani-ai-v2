import Navbar from "../navbar/navbar"
import Sidebar from "../sidebar/sidebar"
import { Avatar, AvatarGroup, Button, Card, Flex, Group, Heading, Input, Stack, Text } from "@chakra-ui/react"

function Friends() {
  return (
    <>
        <Navbar />
        <Sidebar />
        <Search />
        <FriendReq />
    </>
  )
}

function FriendReq() {
  return (
    <Flex justifyContent={"center"} mt={"5vw"}>
    <Stack alignItems={"center"} textAlign={"center"}>
      <Card.Root size="sm" width={"90vw"}>
        <Card.Header>
          <Heading size="lg">Friend Requests</Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
            <Text mb={"4vw"}>12 people have requested to follow you.</Text>
          <Flex justifyContent={"space-between"}>
            <AvatarGroup gap="0" spaceX="-3" size="lg">
                <Avatar.Root>
                    <Avatar.Fallback name="Uchiha Sasuke" />
                    <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/9/131317.webp?s=d4b03c7291407bde303bc0758047f6bd" />
                </Avatar.Root>

                <Avatar.Root>
                    <Avatar.Fallback name="Baki Ani" />
                    <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/7/284129.webp?s=a8998bf668767de58b33740886ca571c" />
                </Avatar.Root>

                <Avatar.Root>
                    <Avatar.Fallback name="Uchiha Chan" />
                    <Avatar.Image src="https://cdn.myanimelist.net/r/84x124/images/characters/9/105421.webp?s=269ff1b2bb9abe3ac1bc443d3a76e863" />
                </Avatar.Root>
                <Avatar.Root variant="solid">
                    <Avatar.Fallback>+3</Avatar.Fallback>
                </Avatar.Root>
                </AvatarGroup>
                <Button>Open Requests</Button>
          </Flex>
          
        </Card.Body>
      </Card.Root>
    </Stack> 
    </Flex>
  ) 
}

function Search() {
    return (
    <Flex justifyContent={"center"} mt={"5vw"}>
    <Stack alignItems={"center"} textAlign={"center"}>
      <Card.Root size="sm" width={"90vw"}>
        <Card.Header>
          <Heading size="lg">
            <Flex>
                <Text>Discover Friends</Text>
            </Flex>
          </Heading>
        </Card.Header>
        <Card.Body color="fg.muted">
            
            <Group attached w="full" maxW="sm">
            <Input flex="1" placeholder="Enter email (ex.aryangmail.com)" />
            <Button variant="solid">
                Search
            </Button>
            </Group>
        </Card.Body>
      </Card.Root>
    </Stack> 
    </Flex>
  )
}

export default Friends