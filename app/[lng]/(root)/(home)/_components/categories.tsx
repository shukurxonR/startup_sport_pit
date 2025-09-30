// import { allCategories } from '@/components/constants'
// import Image from 'next/image'

// function AllCategories() {
// 	return (
// 		<>
// 			<div id='categories' className='max-w-6xl mx-auto pt-8 scroll-mt-20'>
// 				<h1 className='text-3xl  font-bold flex justify-center'>
// 					All Categories
// 				</h1>
// 				<div className='grid grid-cols-4 md:grid-cols-8 mt-10'>
// 					{allCategories.map(category => (
// 						<div
// 							className='flex flex-col items-center transition-transform duration-300 hover:scale-110 cursor-pointer'
// 							key={category.name}
// 						>
// 							<div className='py-2 px-2 border bg-gray-200 rounded-full'>
// 								<Image
// 									src={category.img}
// 									alt={category.name}
// 									width={80}
// 									height={80}
// 								/>
// 							</div>
// 							<span className='mx-auto text-xl font-bold'>{category.name}</span>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</>
// 	)
// }

// export default AllCategories
import { allCategories } from '@/components/constants'
import Image from 'next/image'

function AllCategories() {
	return (
		<section
			id='categories'
			className='max-w-6xl mx-auto pt-8 scroll-mt-20 max-md:px-3'
		>
			<h2 className='text-2xl md:text-3xl font-bold text-center'>
				All Categories
			</h2>

			{/* GRID */}
			<div className='mt-8 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6'>
				{allCategories.map(category => (
					<div
						key={category.name}
						className='group flex flex-col items-center cursor-pointer'
					>
						{/* ICON CIRCLE */}
						<div className='p-3  md:p-5  bg-gray-100 border border-gray-200 rounded-full shadow-sm group-hover:shadow-md group-hover:bg-white transition-all duration-300'>
							<Image
								src={category.img}
								alt={category.name}
								width={56}
								height={56}
								className='sm:w-14 sm:h-14 w-12 h-12 object-contain'
							/>
						</div>

						{/* NAME */}
						<span className='mt-2 text-sm md:text-base font-medium text-gray-700 group-hover:text-black transition-colors'>
							{category.name}
						</span>
					</div>
				))}
			</div>
		</section>
	)
}

export default AllCategories
