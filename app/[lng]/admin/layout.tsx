import { ChildProps } from '@/types/types'
import Navbar from './_components/navbar'
import Sidebar from './_components/sidebar'

function Layout({ children }: ChildProps) {
	return (
		<div>
			<Navbar />
			<Sidebar />
			<main className='pt-[13vh] pl-[320px] w-full p-4'>
				<div className='size-full rounded-md bg-secondary px-4 pb-4'>
					{children}
				</div>
			</main>
		</div>
	)
}

export default Layout
