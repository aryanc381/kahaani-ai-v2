import { Flex, HStack, Image, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { VscReactions } from "react-icons/vsc";
import { useEffect, useState } from "react";
import axios from "axios";




function Navbar() {
    const navigate = useNavigate();
    const [friendCount, setFriendCount] = useState(0);
    useEffect(() => {
      async function fetchFriends() {
        try {
          const response = await axios({
            method: "GET",
            url: "http://10.23.59.210:3000/v1/api/root/friends/count",
            params: {
              email: "admin@gmail.com"
            }
          });

          setFriendCount(response.data.friendCount)
        } catch(err) {
          console.log("Internet Error");
        }
      }
      fetchFriends();
    }, [])
  return (
    <Flex flexDirection={"column"} mt={{base: "2vw"}} mr={{base: "5vw"}} ml={{base: "5vw"}}>
      <Flex justifyContent={"space-between"}>
        
        <Image src="./logo.png" width={{base: "13vw"}} onClick={() => {navigate('/home')}}/>
        <Text textAlign={"center"} textStyle={{base: "2xl"}} ml={{base:"-1.5vw"}} mt={{base: "3.5vw", md: "0.5vw"}} letterSpacing={{base: "-0.3vw"}} width={{base: "60vw"}}>KahaaniAI</Text>
        <HStack gap="4" maxWidth={{base: "15vw"}}>
      <VscReactions size={"10vw"} onClick={() => navigate('/friends')}/>
      </HStack>
      </Flex>
      
    </Flex>
  )
}

export default Navbar;