import { useState } from "react"
import Navbar from "../navbar/navbar"
import Sidebar from "../sidebar/sidebar"
import { Avatar, AvatarGroup, Button, Table, Card, CloseButton, Dialog, Flex, Group, Heading, Input, Portal, Stack, Text } from "@chakra-ui/react"
import { Toaster, toaster } from "@/components/ui/toaster"
import axios from "axios"

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
                    <Avatar.Fallback>+1</Avatar.Fallback>
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
  type User = {
    _id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    password: string;
  };

  const [mail, setMail] = useState('');
  const [open, setOpen] = useState(false);
  const [users, setUsers] = useState<User[]>([]);

  async function SearchHandler() {
    const toastId = toaster.create({
      description: "Searching people...",
      type: "loading",
      id: "toast_id",
    });

    try {
      const response = await axios({
        url: "http://10.23.59.210:3000/v1/api/root/friends/search?email=" + mail,
        method: "GET",
      });

      console.log(response.data);

      let color = "";
      if (response.data.msg === "Users found.") {
        color = "success";
        setUsers(response.data.usersData);
        setOpen(true);
      } else {
        color = "error";
      }

      toaster.update(toastId, {
        description: response.data.msg,
        type: color,
        duration: 3000,
      });
    } catch (err) {
      toaster.update(toastId, {
        type: "error",
        description: "Backend Server Unavailable.",
        duration: 3000,
      });
    }
  }

  return (
    <Flex justifyContent={"center"} mt={"5vw"}>
      <Toaster />

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
              <Input
                flex="1"
                placeholder="Enter email (ex.aryangmail.com)"
                onChange={(e) => setMail(e.target.value)}
              />
              <Button variant="solid" onClick={SearchHandler}>
                Search
              </Button>
            </Group>
          </Card.Body>
        </Card.Root>
      </Stack>
      <Flex >
      <Dialog.Root open={open}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content ml={"3vw"} mr={"3vw"}>
              <Dialog.Header>
                <Dialog.Title>Users</Dialog.Title>
              </Dialog.Header>

              <Dialog.Body>
                {users.length > 0 ? (
                  <Table.Root size="sm" borderRadius={"10vw"}>
                    <Table.Header>
                      <Table.Row>
                        <Table.ColumnHeader>Name</Table.ColumnHeader>
                        <Table.ColumnHeader>Email</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">Action</Table.ColumnHeader>
                      </Table.Row>
                    </Table.Header>

                    <Table.Body>
                      {users.map((user) => (
                        <Table.Row key={user._id}>
                          <Table.Cell>{user.firstName} {user.lastName}</Table.Cell>
                          <Table.Cell>{user.email}</Table.Cell>
                          <Table.Cell textAlign="end">
                            <Button
                              size="sm"
                              variant="solid"
                              onClick={() => {}}
                            >
                              Request
                            </Button>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table.Root>
                ) : (
                  <Text>No users found.</Text>
                )}
              </Dialog.Body>

              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Back
                  </Button>
                </Dialog.ActionTrigger>
              </Dialog.Footer>
              

              <Dialog.CloseTrigger asChild>
                <CloseButton size="sm" />
              </Dialog.CloseTrigger>
            </Dialog.Content>
          </Dialog.Positioner>
        </Portal>
      </Dialog.Root>
      </Flex>
    </Flex>
  );
}


export default Friends