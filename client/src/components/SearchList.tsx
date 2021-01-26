import { Text, Image, Flex, FlexProps } from "@chakra-ui/react"

interface SearchMoviesData {
    id: number
    original_title: string
    poster: string
    overview: string
}

interface SearchData {
    movies: SearchMoviesData[]
}

export const SearchList: React.FC<SearchData & FlexProps> = ({movies, onClick}) => {

    return (
        <>
            {movies.map(movie => {
                var words = movie.overview.split('.')
                return (
                    <Flex _hover={{ cursor:"pointer", backgroundColor: "rgba(255, 193, 77, 0.7)"}} onClick={onClick} >
                        <Flex key={movie.id * 4} mx={4} my={8} >
                            <Image src={movie.poster} width="100px" alt="poster" objectFit="cover" />
                            <Flex ml={4} flexDir="column" gridGap={4} >
                                <Text fontWeight="bold" >
                                    {movie.original_title}
                                </Text>
                                <Text textAlign="justify" >
                                    {words[0]}
                                </Text>
                            </Flex>
                        </Flex>
                    </Flex>
                )
            })}
        </>
    )
}