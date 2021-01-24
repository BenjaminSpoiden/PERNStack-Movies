import { Flex, Grid, GridItem} from "@chakra-ui/react"
import React, { useState } from "react"
import { Container } from '../components/Container'
import { LaptopWrapper } from "../components/LaptopWrapper"
import { Movies } from "../components/Movies"
import { NavBar } from "../components/NavBar"
import { SearchInput } from "../components/SearchInput"


type StateInit = {
  genres: string[]
}

const Index = () => {
  
  
  // const [selectedGenres, setSelectGenres] = useState<StateInit>({
  //   genres: []
  // })
  

  // const updateChanges = (e: React.ChangeEvent<HTMLInputElement>, genreId: string) => {
  //   if(e.target.checked) {
  //     setSelectGenres({
  //       genres: selectedGenres?.genres.concat(genreId)
  //     })
  //   }else {
  //     setSelectGenres({
  //       genres: selectedGenres?.genres.filter(val => val !== genreId)
  //     })
  //   }
  // }

  return (
    <Container minH="100vh">
      <NavBar />
      <LaptopWrapper>
        <Flex mt="100px" maxW='1280px' flexDir="row" >
          <Grid templateColumns={["1fr", "1fr", "1fr 3fr"]} gap={4}>
            <GridItem d={['none', 'none', "flex"]} w="100%" >
              <Flex flexDir="column" align="flex-start" justify="flex-start" >
               <SearchInput />
              </Flex>
            </GridItem>
            <GridItem >
              <Movies />
            </GridItem>
          </Grid>
        </Flex>
      </LaptopWrapper>
    </Container>
  )
}
export default Index

