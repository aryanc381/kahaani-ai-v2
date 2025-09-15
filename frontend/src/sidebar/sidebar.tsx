import { Flex, Text } from "@chakra-ui/react";
import { VscAccount, VscChip, VscHome, VscLocation } from "react-icons/vsc";
import { useColorModeValue } from "../components/ui/color-mode";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const textColor = useColorModeValue("gray.900", "gray.100");

  return (
    <Flex
    position="fixed"
    bottom="4vw"
    left="50%"
    transform="translateX(-50%)"
    color={textColor}
    backgroundColor="rgba(255, 255, 255, 0.2)"
    borderRadius="4vw"
    p="3vw"
    gap="7vw"
    zIndex="1000"
    backdropFilter="blur(2vw) saturate(200%) contrast(120%)"
    boxShadow="0 8px 32px rgba(0,0,0,0.2)"
    border="1px solid rgba(188, 188, 188, 0.15)"
  
    overflow="hidden"
  >

    <Flex
      position="absolute"
      inset="0"
      borderRadius="inherit"
      bgGradient="linear(135deg, rgba(255,0,150,0.2), rgba(0,200,255,0.2), rgba(0,255,150,0.2))"
      mixBlendMode="overlay"
      pointerEvents="none"
    />

    {/* Sidebar items */}
    <Flex direction="column" alignItems="center" width="12vw" ml={"1vw"} onClick={() => {navigate('/home')}}>
      <VscHome size="7vw" />
      <Text>Home</Text>
    </Flex>
    <Flex direction="column" alignItems="center" width="12vw"  onClick={() => {navigate('/map')}}>
      <VscLocation size="7.3vw" />
      <Text>Map</Text>
    </Flex>
    <Flex direction="column" justifyContent="center" width="12vw" alignItems="center" mr="2vw"  onClick={() => {navigate('/ai')}}>
      <Flex ml="1.5vw">
        <VscChip size="7vw" />
      </Flex>
      <Text>SpeakAI</Text>
    </Flex>
    <Flex direction="column" alignItems="center" width="12vw" mr={"2vw"}  onClick={() => {navigate('/profile')}}>
      <VscAccount size="7vw" />
      <Text>Profile</Text>
    </Flex>
  </Flex>
  );
}


export default Sidebar;