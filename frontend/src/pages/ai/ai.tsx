import { useNavigate } from "react-router-dom";
import Navbar from "../../navbar/navbar"
import Sidebar from "../../sidebar/sidebar"
import { Button, Flex, Text } from "@chakra-ui/react";

function Ai() {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <AI />
    </div>
  )
}

function AI() {
    const navigate = useNavigate();
      return (
        <>
          <Flex justifyContent={"center"} mt={"60%"} fontSize={"2xl"} gap={"3vw"}>
            <Text>AI Coming Soon</Text>
            <Button onClick={() => {navigate(-1)}}>Go Back</Button>  
          </Flex>
          <Sidebar />
          
        </>
        
      )
}

export default Ai