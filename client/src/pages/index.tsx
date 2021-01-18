import { Flex, SimpleGrid } from "@chakra-ui/react"
import React from "react"
import { Container } from '../components/Container'
import { LaptopWrapper } from "../components/LaptopWrapper"
import { MovieDisplay } from "../components/MovieDisplay"
import { NavBar } from "../components/NavBar"


const Index = () => (
  <Container minH="100vh">
    <NavBar />
    <LaptopWrapper>
      <Flex mt="100px" maxW='1280px' >
        <SimpleGrid columns={[1, 2, 3]} gap={8} >
        {
          Array(20)
          .fill("")
          .map((_, i) => (
            <MovieDisplay 
              key={i} 
              flexDir="column"
              bgColor="#111111" 
              borderBottomColor="orange.400" 
              borderBottomWidth="1px" 
              borderBottomStyle="solid" 
              borderRadius="lg"
              overflow="hidden"
            />
          ))
        }
        </SimpleGrid>
      </Flex>
    </LaptopWrapper>
  </Container>
)

export default Index
