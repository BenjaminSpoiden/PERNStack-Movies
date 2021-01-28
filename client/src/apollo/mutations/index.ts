import { currencyVar } from '../cache'
import createEditCurrency from './editCurrency'

export const currencyMutation = {
    editCurrency: (switcher: boolean) => createEditCurrency(currencyVar, switcher)
}