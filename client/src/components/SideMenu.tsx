import { HamburgerIcon } from "@chakra-ui/icons"
import { Drawer, DrawerBody, DrawerCloseButton, Center, DrawerContent, DrawerHeader, DrawerOverlay, IconButton, useDisclosure } from "@chakra-ui/react"
import React, { useRef } from "react"
import { useAuth } from "../hooks/useAuth"
import { useGenres } from "../hooks/useGenres"
import { Genres } from "./Genres"
import { MenuContent } from "./MenuContent"

interface SideMenuProps {
    updateChanges: (e: React.ChangeEvent<HTMLInputElement>, genreId: number) => void
}

export const SideMenu: React.FC<SideMenuProps> = ({updateChanges}) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { me } = useAuth()
    const buttonRef = useRef()

    
    const {genreData, selectedGenres, setSelectGenres} = useGenres()

    // const updateChanges = (e: React.ChangeEvent<HTMLInputElement>, genreId: number) => {
    //     if(e.target.checked) {
    //         setSelectGenres({
    //             genres: selectedGenres?.genres.concat(genreId)
    //         })
    //     }else {
    //         setSelectGenres({
    //             genres: selectedGenres?.genres.filter(val => val !== genreId)
    //         })
    //     }
    // }

    console.log(selectedGenres)
    
    return (
        <>
            <IconButton 
                    display={["flex", "flex", "none"]}
                    aria-label="side-menu" 
                    variant="none"
                    //@ts-ignore
                    ref={buttonRef}
                    onClick={onOpen}
                    children={<HamburgerIcon />} 
            />
            
            <Drawer 
                isOpen={isOpen} 
                onClose={onClose} 
                placement="right" 
                //@ts-ignore 
                finalFocusRef={buttonRef} 
            >
                <DrawerOverlay />
               
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>
                        {me ? `Welcome, ${me.username}` : "Login or Signup"}
                    </DrawerHeader>

                    <DrawerBody>
                        <Center>
                            <MenuContent d={["flex", "flex", "none"]} />
                        </Center>
                        <Genres genreData={genreData} updateChanges={updateChanges} />
                    </DrawerBody>
                </DrawerContent>
            </Drawer>
        </>
    )
}