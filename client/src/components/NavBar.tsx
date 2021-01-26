import { Button, Flex, HStack, IconButton, Text } from "@chakra-ui/react"
import React from "react"
import NextLink from "next/link"
import { useAuth } from "../hooks/useAuth"
import { FiLogOut } from "react-icons/fi"
import { MeDocument, MeQuery, useLogoutUserMutation } from "../generated/graphql"
import { SettingsIcon } from "@chakra-ui/icons"
import { BiCart, BiEuro } from "react-icons/bi"
import { ModalSearchView } from "./ModalSearchView"
import { CurrencySwitch } from "./CurrencySwitch"

export const NavBar = () => {

    const { me, loading } = useAuth()
    const [logoutUser] = useLogoutUserMutation()
    
    return (
        <Flex 
            as="nav" 
            w="100%" 
            pos="fixed" 
            bgColor="gray.900" 
            minH="100px"
            boxShadow="none"
            zIndex={999}
            align="center"
        >
            <Flex p={4} maxW='1280px' align="center" justify="space-between" w="100%" m="auto">
                <Text>
                    Some App Name
                </Text>
               <ModalSearchView />
                {me && !loading
                    ? 
                        <HStack>
                            <Text>Welcome, {me.username}</Text>
                            <IconButton 
                                aria-label="settings"
                                fontSize="20px"
                                colorScheme="gray"
                                children={<SettingsIcon />}
                            />
                            <IconButton
                                aria-label="cart"
                                fontSize="28px"
                                colorScheme="orange"
                                children={<BiCart />}
                            />
                            <IconButton 
                                aria-label="sign-out" 
                                variant="outline"
                                fontSize="20px"
                                colorScheme="red"
                                children={<FiLogOut />}
                                onClick={async () => await logoutUser({
                                    
                                    update: (cache) => {
                                        cache.writeQuery<MeQuery>({
                                            query: MeDocument,
                                            data: {
                                                __typename: "Query",
                                                me: null
                                            }
                                        })
                                    }
                                })}
                            />
                            <CurrencySwitch aria-label="currency-switch"/>
                        </HStack>
                    :
                        <HStack>
                            <NextLink href="/login" passHref >
                                <Button colorScheme="gray" >
                                    Sign in
                                </Button>
                            </NextLink>
                            <NextLink href="/signup" passHref >
                                <Button colorScheme="orange" >
                                    Register
                                </Button>
                            </NextLink>
                            <CurrencySwitch aria-label="currency-switch"/>
                        </HStack>
                }
            </Flex> 
        </Flex>
    )
}