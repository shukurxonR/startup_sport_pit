'use client'

import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Flag } from 'lucide-react'
import Image from 'next/image'

function CeviewsCard() {
	return (
		<Card>
			<CardContent>
				<div className='flex flex-col py-2 gap-2 relative'>
					<div className='flex items-center gap-2 '>
						<Avatar>
							{/* <AvatarImage src={review.user.picture} /> */}
							<AvatarFallback className='uppercase'>DB</AvatarFallback>
						</Avatar>
						<h1 className='font-bold border-b'>Shukurulloh Abdurahmonov</h1>
					</div>
					<div className='grid grid-cols-3 gap-1'>
						<div className='flex items-center gap-2'>
							<Image
								src={'/products/mass2.png'}
								alt='uz'
								width={50}
								height={50}
							/>
							<h1 className='text-sm font-bold text-blue-600'>
								Mass gainer nuclear nutrition 8kg
							</h1>
						</div>
						<h1 className='col-span-2 font-space-grotesk text-sm text-lime-800'>
							Lorem ipsum dolor, sit amet consectetur adipisicing elit.
							Excepturi eaque labore numquam.
						</h1>
					</div>
					<Button
						className='absolute -right-3 top-2 border'
						variant={'ghost'}
						size={'icon'}
					>
						<Flag />
					</Button>
				</div>
			</CardContent>
		</Card>
	)
}

export default CeviewsCard
