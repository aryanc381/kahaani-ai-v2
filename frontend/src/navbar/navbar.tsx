import { Button, Flex, Menu, Portal } from "@chakra-ui/react"

function Navbar() {
  return (
    <Flex justifyContent={{base: "space-between", md: "center"}} mt={{base: "3vw"}} ml={{base: "3vw"}} mr={{base: "3vw"}} backgroundColor={{base:"#55555544"}} p={{base:"3vw"}} borderRadius={{base:"1vw", md:"0.5vw"}} borderWidth={{base: "0.5vw"}} borderColor={"#2b2b2bff"}>
        <Flex mt={{base:"1vw", md: "0.5vw"}}>
            <p>KahaaniAI</p>
        </Flex>
        <div>
            <Menu.Root>
                <Menu.Trigger asChild>
                    <Button variant={"surface"} size="sm" fontWeight={{base: "bolder"}}>
                    Menu
                    </Button>
                </Menu.Trigger>
                <Portal>
                    <Menu.Positioner>
                    <Menu.Content>
                        <Menu.Item value="Settings">Settings</Menu.Item>
                        <Menu.Item value="Profile">Payment</Menu.Item>
                        <Menu.Item value="Logout" color="fg.error" _hover={{ bg: "bg.error", color: "fg.error" }}>Logout</Menu.Item>
                    </Menu.Content>
                    </Menu.Positioner>
                </Portal>
            </Menu.Root>
        </div>
    </Flex>
  )
}

export default Navbar