import { Flex, Grid, GridItem } from "@chakra-ui/react"
import Head from "next/head"
import React from "react"
import { addApolloState, initializeApolloClient } from "../apollo/client"
import { Container } from '../components/Container'
import { Genres } from "../components/Genres"
import { LaptopWrapper } from "../components/LaptopWrapper"
import { Movies } from "../components/Movies"
import { NavBar } from "../components/NavBar"
import { FetchGenresDocument, FetchGenresQuery } from "../generated/graphql"
import { useGenres } from "../hooks/useGenres"


const Index = () => {
  

  const {genreData, selectedGenres, setSelectGenres} = useGenres()

  const updateChanges = (e: React.ChangeEvent<HTMLInputElement>, genreId: number) => {
    if(e.target.checked) {
        setSelectGenres({
            genres: selectedGenres?.genres.concat(genreId)
        })
    }else {
        setSelectGenres({
            genres: selectedGenres?.genres.filter(val => val !== genreId)
        })
    }
  }

  console.log("s: ", selectedGenres)

  return (
    <>
      <Head>
        <title>eMovies</title>
      </Head>
      <Container minH="100vh">
        <NavBar updateChanges={updateChanges} />
        <LaptopWrapper>
          <Flex mt="100px" maxW='1280px' flexDir="row" >
            <Grid templateColumns={["1fr", "1fr", "1fr 3fr"]} gap={4}>
              <GridItem d={['none', 'none', "flex"]} w="100%" >
                <Genres genreData={genreData} updateChanges={updateChanges} />
              </GridItem>
              <GridItem >
                <Movies selectedGenres={selectedGenres} />
              </GridItem>
            </Grid>
          </Flex>
        </LaptopWrapper>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const apolloClient = initializeApolloClient()

  await apolloClient.query<FetchGenresQuery>({
    query: FetchGenresDocument
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1
  })
}

export default Index

