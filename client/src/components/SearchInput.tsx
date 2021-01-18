import { SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup, InputGroupProps, InputLeftElement } from "@chakra-ui/react"
import React from "react"


export const SearchInput = (props: InputGroupProps) => {
    return (
        <InputGroup {...props} >
            <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300"/>}
            />
            <Input type="text" placeholder="Search movies" />
        </InputGroup>
    )
}