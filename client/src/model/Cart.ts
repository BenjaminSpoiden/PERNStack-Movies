export interface CartItem {
    id: number, 
    original_title: string
    price: number
}

export type CartItems = CartItem[]

export interface Currency {
    currentCurrency: 'EUR' | 'USD'
}

export interface Cart {
    items?: CartItems
}

