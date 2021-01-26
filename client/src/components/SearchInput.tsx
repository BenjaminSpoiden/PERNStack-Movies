import { SearchIcon } from "@chakra-ui/icons"
import { Input, InputGroup,InputLeftElement, InputProps } from "@chakra-ui/react"
import React from "react"


export const SearchInput = (props: InputProps) => {

    return (
        <InputGroup maxW="520px" >
            <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="gray.300"/>}
            />
            <Input  type="text" placeholder="Search movies" {...props} />
        </InputGroup>
    )
}