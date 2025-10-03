// 'use client'
// import { filyallar, filyallarChet, mapData } from '@/components/constants'
// import Header from '@/components/shared/header'
// import TopBar from '@/components/shared/top-bar'
// import { Label } from '@/components/ui/label'
// import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
// import { Separator } from '@/components/ui/separator'
// import { cn } from '@/lib/utils'
// import Image from 'next/image'
// import { useState } from 'react'
// import Services from '../(home)/_components/services'
// function Page() {
// 	const [radioValue, setRadioValue] = useState<string>('fargona')
// 	console.log(radioValue)
// 	return (
// 		<div>
// 			<TopBar label='About us' />
// 			<div className='max-w-6xl mx-auto max-md:px-3'>
// 				<Header
// 					title='About us'
// 					description='Biz bilan tanishib chiqing o`ylaymizki biz sizga manzur kelamiz!'
// 				/>
// 				<div className='grid grid-cols-2 gap-4 mt-8'>
// 					<div className='relative w-full h-80'>
// 						<Image
// 							src={'/body-pit-comp.webp'}
// 							alt='body-pit.uz'
// 							fill
// 							className='object-cover'
// 						/>
// 					</div>
// 					<div className='relative w-full h-80'>
// 						<Image
// 							src={'/body-pit-lifee.jpg'}
// 							alt='body-pit.uz'
// 							fill
// 							className='object-cover'
// 						/>
// 					</div>
// 				</div>
// 				<div className='mt-6 flex flex-col gap-4'>
// 					<h1 className='text-xl  font-bold'>
// 						Full information about our store
// 					</h1>
// 					<span>
// 						Бренд All Pit был создан в 2018 году и в том же году начал
// 						развиваться в сфере спортивного питание и БАД ов из США . Октябрь
// 						2019 года был открыт первый магазин в городе Ташкент и наш бренд
// 						стремительно рос . Сейчас бренд All Pit ведёт прямые поставки
// 						товаров из разных стран и брендов : США , Германия , Англия ,
// 						Ирландия , Польша и ОАЭ .
// 					</span>
// 				</div>
// 				<h1 className='text-center my-8 text-2xl font-bold border-b pb-4'>
// 					Our branches
// 				</h1>
// 				<div className='grid grid-cols-3 gap-4 mt-8'>
// 					<div className='flex flex-col'>
// 						<h1 className='text-xl font-bold'>
// 							O`zingizga yaqin filiallarni tanlang
// 						</h1>
// 						<div className='pl-8 pt-8'>
// 							<RadioGroup
// 								defaultValue={radioValue}
// 								onValueChange={setRadioValue}
// 							>
// 								<div className='flex flex-col gap-3'>
// 									{filyallar.map(filial => (
// 										<div
// 											className='flex items-center space-x-2  '
// 											key={filial.name}
// 										>
// 											<RadioGroupItem value={filial.name} id={filial.name} />
// 											<Label
// 												htmlFor={filial.name}
// 												className={cn(
// 													radioValue === filial.name ? 'text-blue-600' : null
// 												)}
// 											>
// 												{filial.label}
// 											</Label>
// 										</div>
// 									))}
// 								</div>
// 								<Separator className='my-4' />
// 								<div className='flex flex-col gap-3'>
// 									{filyallarChet.map(filial => (
// 										<div
// 											className='flex items-center space-x-2'
// 											key={filial.name}
// 										>
// 											<RadioGroupItem value={filial.name} id={filial.name} />
// 											<Label
// 												htmlFor={filial.name}
// 												className={cn(
// 													radioValue === filial.name ? 'text-blue-600' : null
// 												)}
// 											>
// 												{filial.label}
// 											</Label>
// 										</div>
// 									))}
// 								</div>
// 							</RadioGroup>
// 						</div>
// 						<div></div>
// 					</div>
// 					<div className='col-span-2'>
// 						{mapData[radioValue] && (
// 							<iframe
// 								src={mapData[radioValue]}
// 								loading='lazy'
// 								className='w-full h-80 '
// 							></iframe>
// 						)}
// 					</div>
// 				</div>
// 				<Services />
// 			</div>
// 		</div>
// 	)
// }

// export default Page
'use client'
import { filyallar, filyallarChet, mapData } from '@/components/constants'
import Header from '@/components/shared/header'
import TopBar from '@/components/shared/top-bar'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import { useState } from 'react'
import Services from '../(home)/_components/services'

function Page() {
	const [radioValue, setRadioValue] = useState<string>('fargona')

	return (
		<div>
			<TopBar label='About us' />
			<div className='max-w-6xl mx-auto max-md:px-3'>
				<Header
					title='About us'
					description='Biz bilan tanishib chiqing o`ylaymizki biz sizga manzur kelamiz!'
				/>

				{/* Rasm bloklari */}
				<div className='grid grid-cols-2 gap-4 mt-8 max-md:mt-6 max-md:grid-cols-1'>
					<div className='relative w-full h-60 md:h-80 rounded-xl overflow-hidden shadow-md'>
						<Image
							src={'/body-pit-comp.webp'}
							alt='body-pit.uz'
							fill
							className='object-cover'
						/>
					</div>
					<div className='relative w-full h-60 md:h-80 rounded-xl overflow-hidden shadow-md'>
						<Image
							src={'/body-pit-lifee.jpg'}
							alt='body-pit.uz'
							fill
							className='object-cover'
						/>
					</div>
				</div>

				{/* Info blok */}
				<div className='mt-6 flex flex-col gap-4 text-justify'>
					<h1 className='text-xl font-bold max-md:text-lg'>
						Full information about our store
					</h1>
					<span className='text-gray-600 text-sm leading-relaxed'>
						Бренд All Pit был создан в 2018 году и в том же году начал
						развиваться в сфере спортивного питание и БАД ов из США. Октябрь
						2019 года был открыт первый магазин в городе Ташкент и наш бренд
						стремительно рос. Сейчас бренд All Pit ведёт прямые поставки товаров
						из разных стран и брендов: США, Германия, Англия, Ирландия, Польша и
						ОАЭ.
					</span>
				</div>

				{/* Filiallar */}
				<h1 className='text-center mt-8  text-2xl font-bold border-b pb-2 max-md:text-xl'>
					Our branches
				</h1>

				<div className='grid grid-cols-3 gap-4 mt-6 max-md:grid-cols-1'>
					{/* Filial tanlash */}
					<div className='flex flex-col bg-gray-50 rounded-xl p-4 shadow-sm max-md:order-2'>
						<h1 className='text-lg font-bold'>
							O`zingizga yaqin filiallarni tanlang
						</h1>
						<div className='pt-4'>
							<RadioGroup
								defaultValue={radioValue}
								onValueChange={setRadioValue}
							>
								<div className='flex flex-col gap-3'>
									{filyallar.map(filial => (
										<div
											className='flex items-center space-x-2'
											key={filial.name}
										>
											<RadioGroupItem
												value={filial.name}
												id={filial.name}
												className='h-4 w-4'
											/>
											<Label
												htmlFor={filial.name}
												className={cn(
													'text-sm',
													radioValue === filial.name
														? 'text-blue-600 font-semibold'
														: 'text-gray-700'
												)}
											>
												{filial.label}
											</Label>
										</div>
									))}
								</div>
								<Separator className='my-4' />
								<div className='flex flex-col gap-3'>
									{filyallarChet.map(filial => (
										<div
											className='flex items-center space-x-2'
											key={filial.name}
										>
											<RadioGroupItem
												value={filial.name}
												id={filial.name}
												className='h-4 w-4'
											/>
											<Label
												htmlFor={filial.name}
												className={cn(
													'text-sm',
													radioValue === filial.name
														? 'text-blue-600 font-semibold'
														: 'text-gray-700'
												)}
											>
												{filial.label}
											</Label>
										</div>
									))}
								</div>
							</RadioGroup>
						</div>
					</div>

					{/* Karta */}
					<div className='col-span-2 max-md:order-1'>
						{mapData[radioValue] && (
							<iframe
								src={mapData[radioValue]}
								loading='lazy'
								className='w-full h-72 md:h-80 rounded-xl shadow-md'
							></iframe>
						)}
					</div>
				</div>

				<Services />
			</div>
		</div>
	)
}

export default Page
