import { Button, Card, Field, Flex, Input, Stack } from "@chakra-ui/react";

function Login() {
  return (
    <Flex justifyContent={"center"}>

        <Card.Root maxW="md" mt={{base: "40vw", md: "10vw"}} mr={{base: "10vw", md: "0vw"}} ml={{base: "10vw", md: "0vw"}}>
            <Card.Header>
            <Card.Title>Login</Card.Title>
            <Card.Description>
                Log In to your account with Email ID / Phone Number and Password.
            </Card.Description>
            </Card.Header>
            <Card.Body>
            <Stack gap="4" w="full">
                <Field.Root>
                <Field.Label>Email ID / Phone Number</Field.Label>
                <Input placeholder="ex. hello@gmail.com / 9049122622"/>
                </Field.Root>

                <Field.Root>
                <Field.Label>Password</Field.Label>
                <Input placeholder="ex. password@123"/>
                </Field.Root>
            </Stack>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
            <Button variant="outline">Sign Up</Button>
            <Button variant="solid">Log In</Button>
            </Card.Footer>
        </Card.Root>

    
    </Flex>
    )

}

export default Login;