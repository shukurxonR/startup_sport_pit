'use client'

import { lngs } from '@/components/constants'
import { Button } from '@/components/ui/button'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'
import { Languages } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
function LngMenu() {
	const { lng } = useParams()

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger asChild>
					<Button variant={'ghost'} size={'icon'}>
						<Languages className='hover:scale-110 transition-transform duration-300 !size-5 ' />
					</Button>
				</DropdownMenuTrigger>
				<DropdownMenuContent>
					{lngs.map(item => (
						<Link key={item.route} href={`/${item.route}`}>
							<DropdownMenuItem
								className={cn(
									'cursor-pointer',
									lng === item.route && 'bg-slate-200'
								)}
							>
								<Image
									src={`/locales/${item.route}.png`}
									alt={item.label}
									width={25}
									height={25}
								/>
								<span className='ml-2 font-space-grotesk font-medium'>
									{item.label}
								</span>
							</DropdownMenuItem>
						</Link>
					))}
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default LngMenu
