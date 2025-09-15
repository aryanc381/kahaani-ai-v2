import { Button, Flex, Text } from '@chakra-ui/react'
import Navbar from '../../navbar/navbar'
import Sidebar from '../../sidebar/sidebar'
import { useNavigate } from 'react-router-dom'

function Gmap() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Flex justifyContent={"center"} mt={"60%"} fontSize={"2xl"} gap={"3vw"}>
        <Text>Maps Coming Soon</Text>
        <Button onClick={() => {navigate(-1)}}>Go Back</Button>  
      </Flex>
      <Sidebar />
      
    </>
    
  )
}

export default Gmap