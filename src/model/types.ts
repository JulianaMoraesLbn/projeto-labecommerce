
export interface createProductDTO {
    name: string,
    price: number,
    image_url: string
}

export interface createUserDTO {
    name: string, 
    email: string,
    password: string
}

export interface newAquisitionDTO {
    user_id: string, 
    product_id: string,
    quantity: number
}

export interface getAquisitionIdDTO{
    user_id: string
}

export interface getProductDTO {
    title: string,
    order: string
}

export type product = {
    id: string,
    name: string,
    price: number,
    image_url: string
}

export type user = {
    id: string,
    name: string, 
    email: string,
    password: string
}

export type aquisition = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}

export type userType = {
    id: string,
    name: string,
    email: string,
    password: string
}

export type productType = {
    id: string,
    name: string,
    price: number,
	image_url: string
}