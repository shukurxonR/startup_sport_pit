'use client'

import { updateReview } from '@/actions/review-action'
import { IReview } from '@/app.types'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Flag } from 'lucide-react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { toast } from 'sonner'

interface Props {
	review: IReview
}

function CeviewsCard({ review }: Props) {
	const pathname = usePathname()

	function updateIsFlag() {
		const promise = updateReview(review._id, !review.isFlag, pathname)
		toast.promise(promise, {
			loading: 'Loading...',
			success: 'Successfully updated ✅',
			error: 'Updated Error',
		})
	}
	return (
		<Card>
			<CardContent>
				<div className='flex flex-col p-2 gap-2 relative'>
					<div className='flex items-center gap-2 '>
						<Avatar>
							<AvatarImage
								src={review.user?.picture}
								className='w-9 h-9 object-cover rounded-full'
							/>
							<AvatarFallback className='uppercase'>DB</AvatarFallback>
						</Avatar>
						<h1 className='font-bold border-b text-sm'>
							{review.user.fullName}
						</h1>
					</div>
					<div className='grid grid-cols-3 gap-2'>
						<div className='flex items-center gap-2'>
							<Image
								src={review.product.images[0]}
								alt='uz'
								width={50}
								height={50}
							/>
							<h1 className='text-sm font-bold text-blue-600'>
								{review.product.name}
							</h1>
						</div>
						<h1 className='col-span-2 font-space-grotesk font-bold text-[18px] text-lime-800 '>
							{review.data.slice(0, 30) + '...'}
						</h1>
					</div>
					{review.isFlag ? (
						<Button
							className='absolute -right-3 top-2 border'
							variant={'destructive'}
							size={'icon'}
							onClick={updateIsFlag}
						>
							<Flag />
						</Button>
					) : (
						<Button
							className='absolute -right-3 top-2 border'
							variant={'ghost'}
							size={'icon'}
							onClick={updateIsFlag}
						>
							<Flag />
						</Button>
					)}
				</div>
			</CardContent>
		</Card>
	)
}

export default CeviewsCard
