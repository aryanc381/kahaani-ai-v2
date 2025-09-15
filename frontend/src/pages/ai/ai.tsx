
import Navbar from "../../navbar/navbar"
import Sidebar from "../../sidebar/sidebar"
import { Button, Flex, Text } from "@chakra-ui/react";
import SiriWave from "siriwave";
import { useEffect, useRef } from "react";
import { VscTelescope } from "react-icons/vsc";

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

        <Button variant="subtle" borderRadius="10vw" px="6vw" py="4">
          Talk with Vaishvi <VscTelescope />
        </Button>
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

export default Ai;