
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
  return(
    <Flex>
    <Flex direction={"column"} mt={"50%"} justifyContent={"center"} alignItems={"center"} textAlign={"center"}>
      <Text fontSize={"6vw"} fontWeight={"100"} textAlign={"center"} ml={"6vw"}>What can I do for you today?</Text>
      <SiriWaveComponent />
      <Button variant={"subtle"} borderRadius={"10vw"} ml={"3vw"}>Talk with Vaishvi<VscTelescope /></Button>
    </Flex>
    
    </Flex>
  )
}
function SiriWaveComponent() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const siriWaveRef = useRef<SiriWave | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      siriWaveRef.current = new SiriWave({
        container: containerRef.current,
        width: 400,
        height: 100,
        style: "ios9", // "ios" or "ios9"
        autostart: true,
        speed: 0.1,
        amplitude: 3
      });
    }

    return () => {
      siriWaveRef.current?.dispose();
    };
  }, []);

  return (
    <Flex
      ref={containerRef}
      style={{maxWidth: "90vw", width: "full", marginTop: "0vw", marginBottom: "0vw" }}
    />

  );
}

export default Ai;