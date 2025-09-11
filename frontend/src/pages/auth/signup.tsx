import { Button, Card, Field, Flex, Input, Stack } from "@chakra-ui/react";
import { useState } from "react";

function Signup() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
  return (
    <Flex justifyContent={"center"}>

        <Card.Root maxW="md" mt={{base: "10vw", md: "2vw"}} mr={{base: "10vw", md: "0vw"}} ml={{base: "10vw", md: "0vw"}}>
            <Card.Header>
            <Card.Title>Sign up</Card.Title>
            <Card.Description>
                Fill in the credentials below to create an account and access KahaaniAI Platform.
            </Card.Description>
            </Card.Header>
            <Card.Body>
            <Stack gap="4" w="full">
                <Field.Root>
                <Field.Label>First Name</Field.Label>
                <Input placeholder="ex. Aditya" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                </Field.Root>

                <Field.Root>
                <Field.Label>Last Name</Field.Label>
                <Input placeholder="ex. Chauhan" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                </Field.Root>

                <Field.Root>
                <Field.Label>Email ID</Field.Label>
                <Input placeholder="ex. chauhanaryan@gmail.com" value={mail} onChange={(e) => {setMail(e.target.value)}}/>
                </Field.Root>

                <Field.Root>
                <Field.Label>Phone Number</Field.Label>
                <Input placeholder="ex. 912345678" value={phone} onChange={(e) => setPhone(e.target.value)}/>
                </Field.Root>

                <Field.Root>
                <Field.Label>Password</Field.Label>
                <Input placeholder="ex. Aryan@123" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                </Field.Root>
            </Stack>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
            <Button variant="outline">Cancel</Button>
            <Button variant="outline">Login</Button>
            <Button variant="solid">Sign in</Button>
            </Card.Footer>
        </Card.Root>
    </Flex>
    )

}

export default Signup