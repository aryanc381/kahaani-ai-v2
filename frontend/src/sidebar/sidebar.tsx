import { Flex, Text } from "@chakra-ui/react";
import { VscAccount, VscChip, VscLocation, VscSettings } from "react-icons/vsc";
import { useColorModeValue } from "../components/ui/color-mode";

function Sidebar() {

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
  gap="6vw"
  zIndex="1000"
  backdropFilter="blur(1.5vw) saturate(200%) contrast(120%)"
  boxShadow="0 8px 32px rgba(0,0,0,0.2)"
  border="1px solid rgba(255, 255, 255, 0.25)"
 
  overflow="hidden"
>
  {/* 🌈 prism rainbow overlay */}
  <Flex
    position="absolute"
    inset="0"
    borderRadius="inherit"
    bgGradient="linear(135deg, rgba(255,0,150,0.2), rgba(0,200,255,0.2), rgba(0,255,150,0.2))"
    mixBlendMode="overlay"
    pointerEvents="none"
  />

  {/* Sidebar items */}
  <Flex direction="column" alignItems="center" width="12vw">
    <VscAccount size="7vw" />
    <Text>Profile</Text>
  </Flex>
  <Flex direction="column" alignItems="center" width="12vw">
    <VscLocation size="7.3vw" />
    <Text>Map</Text>
  </Flex>
  <Flex direction="column" justifyContent="center" width="12vw" alignItems="center" mr="2vw">
    <Flex ml="1.5vw">
      <VscChip size="7vw" />
    </Flex>
    <Text>SpeakAI</Text>
  </Flex>
  <Flex direction="column" alignItems="center" width="12vw">
    <VscSettings size="7vw" />
    <Text>Settings</Text>
  </Flex>
</Flex>
  );
}


export default Sidebar;