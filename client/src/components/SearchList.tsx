import { Box, Text } from "@chakra-ui/react"

interface SearchMoviesData {
    id: number
    original_title: string
}

interface SearchData {
    movies: SearchMoviesData[]
}

export const SearchList: React.FC<SearchData> = ({movies}) => {

    return (
        <>
            {movies.map(movie => (
                <Box key={movie.id * 4} p={4}>
                    <Text>
                        {movie.original_title}
                    </Text>
                </Box>
            ))}
        </>
    )
}