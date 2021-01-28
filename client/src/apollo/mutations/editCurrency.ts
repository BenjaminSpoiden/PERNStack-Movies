import { ReactiveVar } from "@apollo/client/core";
import { Currency } from "../../model/Cart";

const convertCurrency = (currency: ReactiveVar<Currency>, switcher: boolean) => {
    let newCurrency: Currency = {
        currentCurrency: 'USD'
    }

    if(switcher) {
        newCurrency.currentCurrency = 'EUR'
    }else {
        newCurrency.currentCurrency = 'USD'
    }

    return currency(newCurrency)
} 
export default convertCurrency

