import { IReview } from '@/app.types'
import ReactStars from 'react-rating-stars-component'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Card, CardContent } from '../ui/card'

function ReviewCard(review: IReview) {
	return (
		<Card>
			<CardContent className='p-3'>
				<div className='flex items-center gap-2'>
					<Avatar>
						<AvatarImage src={review.user.picture} />
						<AvatarFallback>CN</AvatarFallback>
					</Avatar>
					<h1 className=' font-bold  max-md:text-sm line-clamp-1 font-mono'>
						{review.user.fullName}
					</h1>
				</div>
				<div className='flex flex-col gap-1 mt-1'>
					<ReactStars
						count={5}
						value={review.rating}
						isHalf={true}
						edit={false}
						size={18}
						activeColor='#facc15'
					/>
					<span className='line-clamp-2 h-11 pb-1 text-sm'>{review.data}</span>
				</div>
			</CardContent>
		</Card>
	)
}

export default ReviewCard
