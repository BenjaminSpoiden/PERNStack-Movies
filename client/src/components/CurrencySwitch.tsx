import { IconButton, IconButtonProps } from "@chakra-ui/react"
import React, { useState } from "react"
import { BiDollar, BiEuro } from "react-icons/bi"
import { currencyMutation } from "../apollo/mutations/index"

export const CurrencySwitch: React.FC<IconButtonProps> = (props) => {

    const [currency, setCurrency] = useState(false)

    const {editCurrency} = currencyMutation

    const handleCurrency = () => {
        setCurrency(c => !c)
        editCurrency(currency)
    }

    return (
        <IconButton 
            icon={currency ? <BiDollar /> : <BiEuro />}
            fontSize="20px"
            colorScheme="red"
            onClick={() => handleCurrency()}
            variant="outline"
            {...props}
        />
    )
}