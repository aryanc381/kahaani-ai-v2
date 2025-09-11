import { Button, Card, Field, Flex, Input, Stack } from "@chakra-ui/react";

function Signup() {
  return (
    <Flex justifyContent={"center"}>

        <Card.Root maxW="md" mt={{base: "10vw", md: "2vw"}} mr={{base: "10vw", md: "0vw"}} ml={{base: "10vw", md: "0vw"}}>
            <Card.Header>
            <Card.Title>Sign up</Card.Title>
            <Card.Description>
                Fill in the form below to create an account and access KahaaniAI Platform.
            </Card.Description>
            </Card.Header>
            <Card.Body>
            <Stack gap="4" w="full">
                <Field.Root>
                <Field.Label>First Name</Field.Label>
                <Input placeholder="ex. Aditya"/>
                </Field.Root>

                <Field.Root>
                <Field.Label>Last Name</Field.Label>
                <Input placeholder="ex. Chauhan"/>
                </Field.Root>

                <Field.Root>
                <Field.Label>Email ID</Field.Label>
                <Input placeholder="ex. chauhanaryan@gmail.com"/>
                </Field.Root>

                <Field.Root>
                <Field.Label>Phone Number</Field.Label>
                <Input placeholder="ex. 912345678"/>
                </Field.Root>

                <Field.Root>
                <Field.Label>Password</Field.Label>
                <Input placeholder="ex. Aryan@123"/>
                </Field.Root>
            </Stack>
            </Card.Body>
            <Card.Footer justifyContent="flex-end">
            <Button variant="outline">Go Back</Button>
            <Button variant="outline">Cancel</Button>
            <Button variant="solid">Sign in</Button>
            </Card.Footer>
        </Card.Root>

    
    </Flex>
    )

}

export default Signup