import CeviewsCard from './_components/reviews-card'
function page() {
	return (
		<div className='p-6 h-full'>
			<h1 className='text-2xl font-bold pb-6'>All Reviews</h1>
			<div className='grid grid-cols-2 gap-1'>
				<CeviewsCard />
				<CeviewsCard />
				<CeviewsCard />
				<CeviewsCard />
			</div>
		</div>
	)
}

export default page
