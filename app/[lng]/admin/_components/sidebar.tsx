'use client'
import { instructorNavLinks } from '@/components/constants'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

function Sidebar() {
	const pathname = usePathname()
	return (
		<div className='fixed inset-0 mt-[10vh] w-[300px] h-[90vh] '>
			<div className='mt-6 container'>
				<div className='flex flex-col gap-3'>
					{instructorNavLinks.map(navlink => (
						<Link href={navlink.route} key={navlink.route} className='px-6'>
							<Button
								className='w-full justify-start gap-2 py-2'
								variant={
									pathname.slice(3) === navlink.route ? 'secondary' : 'ghost'
								}
							>
								<navlink.icon className='size-10' />
								<span>{navlink.label}</span>
							</Button>
						</Link>
					))}
				</div>
			</div>
		</div>
	)
}

export default Sidebar
