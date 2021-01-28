import axios from "axios"

export const priceConverter = async(originalCurrency: string, newCurrency: string, amount: number) => { 
    if(originalCurrency === newCurrency) return amount

    const { data } = await axios.get(`https://api.exchangeratesapi.io/latest?symbols=${newCurrency}&base=${originalCurrency}`)

    const multiplier = Object.values(data.rates)[0] as number

    return amount * multiplier
}