import { IconButton, IconButtonProps } from "@chakra-ui/react"
import React, { useState } from "react"
import { BiDollar, BiEuro } from "react-icons/bi"

export const CurrencySwitch: React.FC<IconButtonProps> = (props) => {

    const [currency, setCurrency] = useState(false)

    return (
        <IconButton 
            icon={currency ? <BiDollar /> : <BiEuro />}
            fontSize="20px"
            colorScheme="red"
            variant="outline"
            onClick={() => setCurrency(c => !c)}
            {...props}
        />
    )
}