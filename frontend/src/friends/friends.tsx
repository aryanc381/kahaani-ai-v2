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
  const [open, setOpen] = useState(false);
  const [pending, setPending] = useState<string[]>([]);

  const loggedInEmail = "aditya@gmail.com";

  async function PendingHandler() {
    try {
      const response = await axios({
        url: "http://10.23.59.210:3000/v1/api/root/friends/requests/incoming",
        method: "GET",
        params: {
          email: loggedInEmail,
        },
      });

      // backend sends `pending`, not `pendingUsers`
      setPending(response.data.pending || []);
    } catch (err) {
      console.log(err);
    }
  }

  async function AcceptHandler(fromEmail: string) {
    try {
      const response = await axios.post(
        "http://10.23.59.210:3000/v1/api/root/friends/search/accept",
        {
          from: fromEmail,
          to: loggedInEmail,
        }
      );
      alert(response.data.msg);
      // refresh list after accept
      PendingHandler();
    } catch (err: any) {
      alert(err.response?.data?.msg || "Error accepting request");
    }
  }

  return (
    <Flex justifyContent={"center"} mt={"5vw"}>
      <Stack alignItems={"center"} textAlign={"center"}>
        <Card.Root size="sm" width={"90vw"}>
          <Card.Header>
            <Heading size="lg">Friend Requests</Heading>
          </Card.Header>
          <Card.Body color="fg.muted">
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
                  <Avatar.Fallback>+{pending.length}</Avatar.Fallback>
                </Avatar.Root>
              </AvatarGroup>
              <Button
                onClick={() => {
                  setOpen(true);
                  PendingHandler();
                }}
              >
                Open Requests
              </Button>
            </Flex>
          </Card.Body>
        </Card.Root>
      </Stack>

  
      <Dialog.Root open={open}>
        <Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content ml={"3vw"} mr={"3vw"}>
              <Dialog.Header>
                <Dialog.Title>Incoming Friend Requests</Dialog.Title>
              </Dialog.Header>

              <Dialog.Body>
                
                {pending.length > 0 ? (
                  <>
                  <Text mb={"4vw"}>
                    You have {pending.length} request(s).
                  </Text>
                  <Table.Root size="sm">
                    <Table.Header>
                      <Table.Row>
                        <Table.ColumnHeader>Email</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">
                          Action
                        </Table.ColumnHeader>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {pending.map((email) => (
                        <Table.Row key={email}>
                          <Table.Cell>{email}</Table.Cell>
                          <Table.Cell textAlign="end">
                            <Button
                              size="sm"
                              variant="solid"
                              onClick={() => AcceptHandler(email)}
                            >
                              Accept
                            </Button>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table.Root>
                  </>
                ) : (
                  <Text>No pending requests.</Text>
                )}
              </Dialog.Body>

              <Dialog.Footer>
                <Dialog.ActionTrigger asChild>
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Close
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
  );
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

  async function ReqHandler(to: string) {
    const toastId = toaster.create({
      description: "Sending request...",
      type: "loading",
      id: "req_toast_id",
    });

    try {
      const response = await axios.post(
        "http://10.23.59.210:3000/v1/api/root/friends/search/request",
        {
          from: "aditya@gmail.com", //  replacing later with logged-in user email
          to: to,
        }
      );

      toaster.update(toastId, {
        description: response.data.msg,
        type: "success",
        duration: 3000,
      });
    } catch (err: any) {
      toaster.update(toastId, {
        type: "info",
        description: err.response?.data?.msg || "Request failed",
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
                              onClick={() => {ReqHandler(user.email)}}
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


export default Friends;