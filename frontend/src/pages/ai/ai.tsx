
import Navbar from "../../navbar/navbar"
import Sidebar from "../../sidebar/sidebar"
import { Button, Card, Flex, Text } from "@chakra-ui/react";
import SiriWave from "siriwave";
import { useEffect, useRef, useState } from "react";
import Vapi from '@vapi-ai/web';

function Ai() {
  return (
    <div>
        <Navbar />
  
        <Sidebar />
        <Combination />
    </div>
  )
}


function Combination() {
  return (
    <Flex w="100vw" h="60vh" justify="center" align="center" position="relative">
      <Flex
        direction="column"
        align="center"
        justify="center"
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        px="4vw"
        textAlign="center"
        gap="6vw" // vertical spacing between items
      >
        <Text fontSize="6vw" fontWeight="100" width={"80vw"}>
          What can I do for you today?
        </Text>

        <SiriWaveComponent />

        {/* <Button variant="subtle" borderRadius="10vw" px="6vw" py="4">
          Talk with Vaishvi <VscTelescope />
        </Button> */}
        <Info />
      </Flex>
    </Flex>
  );
}

function SiriWaveComponent() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const siriWaveRef = useRef<SiriWave | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      siriWaveRef.current = new SiriWave({
        container: containerRef.current,
        width: 350, // responsive width
        height: 150,
        style: "ios9",
        autostart: true,
        speed: 0.1,
        amplitude: 2, // subtle idle motion
      });
    }

    return () => {
      siriWaveRef.current?.dispose();
    };
  }, []);

  return (
    <Flex
      ref={containerRef}
      w="100%"
      maxW="90vw" // ensures it stays within screen
      h="20vw"
      justify="center"
      align="center"
    />
  );
}

function Info() {
  const [vapi, setVapi] = useState<Vapi | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const vapiInstance = new Vapi("6bd2589c-2aa6-4b05-a1f4-f4eca44f5b53");
    setVapi(vapiInstance);

    vapiInstance.on("call-start", () => {
      setIsConnected(true);
      setIsLoading(false);
    });

    vapiInstance.on("call-end", () => {
      setIsConnected(false);
      setIsLoading(false);
    });

    return () => {
      vapiInstance?.stop();
    };
  }, []);

  const startCall = async () => {
    if (!vapi) return;
    setIsLoading(true);
    await vapi.start("2f63bfed-c2b1-4243-8ebf-d5643b19dd72");
  };

  const endCall = async () => {
    await vapi?.stop();
    setIsConnected(false);
    setIsLoading(false);
  };

  return (
    <Flex>
      <Card.Root
        size="lg"
        width={{ md: "26vw" }}
        pt={{ md: "1vw" }}
        mt={{ md: "1vw" }}
        ml={{ md: "1vw" }}
        letterSpacing={{ md: "-0.04vw" }}
      >
        <Card.Body color="fg.muted" mt={{ md: "-1vw" }} fontSize={{ md: "1.2vw" }}>
          <Flex justifyContent={{ md: "space-between" }}>
            
          </Flex>

          {/* AI Button */}
          <Flex>
            <Button
              variant="solid"
              width="40vw"
              p="3vw"
              mt="3vw"
              bg={
                isConnected
                  ? "green.500"
                  : isLoading
                  ? "orange.400"
                  : "gray.600"
              }
              _hover={{
                bg: isConnected
                  ? "green.400"
                  : isLoading
                  ? "orange.300"
                  : "gray.500",
              }}
              onClick={isConnected ? endCall : startCall}
            >
              <Flex justifyContent="space-between" gap="1vw" >
                <Text mt="0.9vw" fontSize="5vw" color="white" fontWeight="300">
                  {isConnected
                    ? "Hello..."
                    : isLoading
                    ? "Loading AI..."
                    : "Talk with AI"}
                </Text>

              </Flex>
            </Button>
          </Flex>
        </Card.Body>
      </Card.Root>
    </Flex>
  );
}

export default Ai;