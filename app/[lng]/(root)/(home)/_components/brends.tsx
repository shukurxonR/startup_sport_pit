'use client'

import Image from 'next/image'
function Brends() {
	return (
		<div className='max-w-6xl mx-auto mt-8'>
			<div className='w-full '>
				<div className='flex items-center gap-8   '>
					<div className='relative w-[25%] h-36'>
						<Image
							src={'/brends/dima.png'}
							alt='dimatize'
							fill
							className='object-cover '
						/>
					</div>
					<h1 className='text-[17px] w-[75%]'>
						<span className='font-bold text-[19px]'>Dymatize </span>
						is a sports nutrition supplement brand founded in 1994 and owned by
						BellRing Brands Inc. (a division of Post Holdings Inc.), known for
						its high-quality, research-backed products like ISO100 and Elite
						Whey, which are formulated without banned substances or unnecessary
						ingredients.
					</h1>
				</div>
				<div className='flex items-center gap-8  '>
					<div className='relative w-[25%] h-36'>
						<Image
							src={'/brends/kevin.png'}
							alt='dimatize'
							fill
							className='object-cover '
						/>
					</div>
					<h1 className='text-[17px] w-[75%]'>
						<span className='font-bold text-[19px]'>Kevin Levrone </span> brand
						offers dietary supplements, sportswear, and other fitness products,
						founded by the IFBB professional bodybuilder Kevin Levrone. The
						supplement lines, like the Signature Series, Black Line, Silver
						Line, and Gold Line, focus on quality ingredients.
					</h1>
				</div>
			</div>
		</div>
	)
}

export default Brends
