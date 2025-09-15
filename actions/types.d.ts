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
