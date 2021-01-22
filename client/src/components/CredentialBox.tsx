import { Box, BoxProps } from "@chakra-ui/react"
import React from "react"

export const CredentialBox: React.FC<BoxProps> = (props) => {

    return (
        <Box d="flex" flexDir="column" shadow="lg" p={8} borderColor="orange.500" borderWidth="1px" borderStyle="solid" borderRadius="lg"  {...props} >
            {props.children}
        </Box>
    )
}