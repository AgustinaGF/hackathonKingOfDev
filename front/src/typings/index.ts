export interface User {
    fullName?: string
    email?: string
    address?: Address
    number?: number
    dni?: number
    status?: string
    account?: string
    contracts?: Contract
}

export interface Contract {
    name?: string
    price?: number
    transactionHash?: string
    file?:string 
}

export interface Address {
    streetName?: string
    streetNumber?: string
    city?: string
    state?: string
    zipCode?: number
}