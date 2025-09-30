export interface IUser {
	_id: string
	fullName: string
	clerkId: string
	email: string
	picture: string
}
export interface IProduct {
	_id: string
	name: string
	category: string
	description: string
	brand: string
	price: number
	top: boolean
	discount: boolean
	percent: number
	images: string[]
	published: boolean
	instructor: IUser
}
export interface searchParamsProps {
	searchParams: { [key: string]: string | undefined }
}

export interface IReview {
	_id: string
	user: IUser
	product: IProduct
	rating: number
	data: string
	isFlag: boolean
	createdAt: string
}
export interface IOrder {
	_id: string
	user: IUser
	fullName: string
	tel: string
	region: string
	city: string
	zip: string
	totalPrice: number
	sent: boolean
	products: { product: IProduct; soni: number; _id: string }[]
	createdAt: string
}
