import { Modal, ModalContent, ModalOverlay, useDisclosure } from "@chakra-ui/react"
import React, { useState, useEffect } from "react"
import { SearchMoviesQuery, useSearchMoviesLazyQuery } from "../generated/graphql"
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
    
    const resetData = () => {
        onClose()
        setData(undefined)
    }

    return (
        <>
            <SearchInput onClick={onOpen} />

            <Modal isOpen={isOpen} onClose={resetData}>
                <ModalOverlay />
                <ModalContent maxW="520px">
                    <SearchInput onChange={e => setSearch(e.target.value)} />
                    {!data
                    ? null
                    :  (
                        //@ts-ignore
                        <SearchList movies={data.searchMovies} onClick={resetData} /> 
                      )}
                </ModalContent>
            </Modal>
        </>
    )
}