export interface ICreateUser {
	clerkId: string
	fullName: string
	email: string
	picture: string
}
export interface IUpdateUser {
	clerkId: string
	updatedData: {
		fullName: string
		email: string
		picture: string
	}
}

export interface ICreateCourse {
	name: string
	category: string
	description: string
	brand: string
	price: number
	top?: boolean
	discount?: boolean
	percent?: number
	images: string[]
}
