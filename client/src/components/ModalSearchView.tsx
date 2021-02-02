import { Box, Modal, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"
import { MeDocument, SearchMoviesQuery, useAdditemMutation, useSearchMoviesLazyQuery } from "../generated/graphql"
import { useDebounce } from "../hooks/useDebounce"
import { SearchInput } from "./SearchInput"
import { SearchList } from "./SearchList"

export const ModalSearchView = () => {

    const {isOpen, onOpen, onClose} = useDisclosure()

    const [search, setSearch] = useState("")
    const [data, setData] = useState<SearchMoviesQuery>()
    const debouncedSearch = useDebounce(search, 400)
    const [searchMovies, {data: searchData}] = useSearchMoviesLazyQuery()

    useEffect(() => {
        searchMovies({
            variables: {
                query: search
            }
        })
        setData(searchData)
    }, [debouncedSearch])

    const [addItem] = useAdditemMutation()
    
    const onAddData = (movie_id: number) => {
        onClose()
        addItem({
            variables: {
                movie_id
            },
            refetchQueries: [{
                query: MeDocument
            }]
        })
        setData(undefined)
    }

    return (
        <Box d={["none", "none", "flex", "flex"]}  >
            <SearchInput onClick={onOpen} />

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent w="420px">
                    <SearchInput onChange={e => setSearch(e.target.value)} />
                    {!data
                    ? null
                    :  (
                        //@ts-ignore
                        <SearchList movies={data.searchMovies} onAddData={onAddData} /> 
                      )}
                </ModalContent>
            </Modal>
        </Box>
    )
}