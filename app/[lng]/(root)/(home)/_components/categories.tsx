import { allCategories } from '@/components/constants'
import Image from 'next/image'

function AllCategories() {
	return (
		<div id='categories' className='max-w-6xl mx-auto pt-8 scroll-mt-20'>
			<h1 className='text-3xl  font-bold flex justify-center'>
				All Categories
			</h1>
			<div className='flex items-center justify-between mt-10'>
				{allCategories.map(category => (
					<div
						className='flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer'
						key={category.name}
					>
						<div className='py-2 px-2 border bg-gray-200 rounded-full'>
							<Image
								src={category.img}
								alt={category.name}
								width={80}
								height={80}
							/>
						</div>
						<span className='mx-auto text-xl font-bold'>{category.name}</span>
					</div>
				))}
			</div>
		</div>
	)
}

export default AllCategories
