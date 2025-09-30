import { getReviewsAdmin } from '@/actions/review-action'
import { IReview, searchParamsProps } from '@/app.types'
import Pagination from '@/components/shared/pagination'
import { auth } from '@clerk/nextjs/server'
import CeviewsCard from './_components/reviews-card'

async function Page({ searchParams }: searchParamsProps) {
	const { userId } = await auth()

	const page = searchParams.page ? +searchParams.page : 1

	const reviewsJSON = await getReviewsAdmin({ clerkId: userId!, page })
	const { reviews, totalReviews, isNext } = JSON.parse(
		JSON.stringify(reviewsJSON)
	)
	console.log(totalReviews)
	return (
		<div className='p-6 h-full'>
			<h1 className='text-2xl font-bold pb-6'>All Reviews</h1>
			<div className='grid grid-cols-2 gap-1'>
				{reviews.map((review: IReview) => (
					<div key={review._id}>
						<CeviewsCard review={review} />
					</div>
				))}
			</div>
			<Pagination isNext={isNext} pageNumber={page} />
		</div>
	)
}

export default Page
