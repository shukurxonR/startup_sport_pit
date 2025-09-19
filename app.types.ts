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
