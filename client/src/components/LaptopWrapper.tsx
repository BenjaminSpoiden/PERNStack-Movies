import { Box, BoxProps } from "@chakra-ui/react";

export const LaptopWrapper: React.FC = ({children}, props: BoxProps) => {

    return (
        <Box p={4} w="100%" {...props} >
            <Box maxW="1280px" m="auto">
                {children}
            </Box>
        </Box>
    )
}