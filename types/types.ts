export interface ChildProps {
	children: React.ReactNode
}
export interface LngProps {
	params: { lng: string }
}
export interface ICard {
	id: number
	discount: boolean
	name: string
	price: number
	status: string
	image: string
	top: boolean
	category: string
}
