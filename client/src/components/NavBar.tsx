import { Button, Flex, HStack, Text } from "@chakra-ui/react"
import React from "react"
import { SearchInput } from "./SearchInput"


export const NavBar = () => {

    return (
        <Flex 
            as="nav" 
            w="100%" 
            pos="fixed" 
            bgColor="gray.900" 
            minH="100px"
            boxShadow="none"
            zIndex={1}
            align="center"
        >
            <Flex p={4} maxW='1280px' align="center" justify="space-between" w="100%" m="auto">
                <Text>
                    Some App Name
                </Text>
                <SearchInput maxW="560px" variant="filled" pr={4} />
                <HStack>
                    <Button colorScheme="gray" >
                        Sign in
                    </Button>
                    <Button colorScheme="orange" >
                        Register
                    </Button>
                </HStack>
            </Flex> 
        </Flex>
    )
}