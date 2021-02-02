import { Flex, Text} from "@chakra-ui/react"
import React from "react"
import { ModalSearchView } from "./ModalSearchView"
import { SideMenu } from "./SideMenu"
import { MenuContent } from "./MenuContent"

interface NavBarProps {
    updateChanges: (e: React.ChangeEvent<HTMLInputElement>, genreId: number) => void
}

export const NavBar: React.FC<NavBarProps> = ({updateChanges}) => {

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
                <MenuContent d={["none", "none", "flex"]} />
                <SideMenu updateChanges={updateChanges} />
            </Flex> 
        </Flex>
    )
}