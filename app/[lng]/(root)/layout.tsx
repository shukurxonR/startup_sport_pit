import { ChildProps } from '@/types/types'
import Footer from './_components/footer'
import NavBar from './_components/navbar'

function RootLayout({ children }: ChildProps) {
	return (
		<div>
			<NavBar />
			<main>{children}</main>

			<Footer />
		</div>
	)
}

export default RootLayout
