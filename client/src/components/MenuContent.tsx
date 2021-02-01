import { SettingsIcon } from "@chakra-ui/icons"
import { HStack, IconButton, Button, Text, StackProps } from "@chakra-ui/react"
import React from "react"
import { BiCart } from "react-icons/bi"
import { FiLogOut } from "react-icons/fi"
import { MeQuery, MeDocument, useLogoutUserMutation } from "../generated/graphql"
import { useAuth } from "../hooks/useAuth"
import { CurrencySwitch } from "./CurrencySwitch"
import NextLink from "next/link"
import Badge from "antd/lib/badge"

export const MenuContent: React.FC<StackProps> = (props) => {

    const { me, loading } = useAuth()
    const [logoutUser] = useLogoutUserMutation()
    return(
        <>
            {me && !loading
                ? 
                    <HStack {...props} >
                        <Text d={["none", "none", "flex"]} >Welcome, {me.username}</Text>
                        <IconButton 
                            aria-label="settings"
                            fontSize="20px"
                            colorScheme="gray"
                            children={<SettingsIcon />}
                        />
                        <NextLink href="/cart/[id]" as={`/cart/${me.id}`} >
                            <Badge count={me.movieItems?.length} style={{backgroundColor: "orange"}} >
                                <IconButton
                                    aria-label="cart"
                                    fontSize="28px"
                                    colorScheme="orange"
                                    children={<BiCart />}
                                />
                            </Badge>
                        </NextLink>
                        <CurrencySwitch aria-label="currency-switch"/>
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
                    </HStack>
                :
                    <HStack {...props}>
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
        </>
    )
}