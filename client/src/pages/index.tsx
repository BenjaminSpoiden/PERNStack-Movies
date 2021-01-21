import { Button, Flex, SimpleGrid } from "@chakra-ui/react"
import React, { useState } from "react"
import { Container } from '../components/Container'
import { LaptopWrapper } from "../components/LaptopWrapper"
import { NavBar } from "../components/NavBar"
import { useFetchMoviesQuery } from "../generated/graphql"



const Index = () => {

  const [currentPage, setCurrentPage] = useState(1)
  const {data, loading, error, fetchMore, variables} = useFetchMoviesQuery({
    variables: {
      page: currentPage
    },
    
  })

  const onFetchMore = async () => {
    await fetchMore({
      variables: {
        page: variables?.page
      }
    })
  }
  console.log("page number: ", variables?.page)
  return (
    <Container minH="100vh">
      <NavBar />
      <LaptopWrapper>
        <Flex mt="100px" maxW='1280px' flexDir="column" >
          <SimpleGrid columns={[1, 2, 3]} gap={8} >
          {/* {data?.fetchMovies && !loading 
            ? data?.fetchMovies.map((movie) =>(
                <MovieDisplay 
                  key={movie.id} 
                  flexDir="column"
                  bgColor="#111111" 
                  borderBottomColor="orange.400" 
                  borderBottomWidth="1px" 
                  borderBottomStyle="solid" 
                  borderRadius="lg"
                  overflow="hidden"
                />
              ))
            : "No data"
          } */}
          </SimpleGrid>
          <Button 
            m='auto' 
            my={4} 
            colorScheme="orange" 
            onClick={() => {
              setCurrentPage(c => c + 1)
              onFetchMore()
            }}
            >
              Load more
          </Button>
        </Flex>
      </LaptopWrapper>
    </Container>
  )
}
export default Index

