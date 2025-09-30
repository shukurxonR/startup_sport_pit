// 'use client'

// import { IOrder } from '@/app.types'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { useMemo } from 'react'
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

// const COLORS = [
// 	'#3B82F6',
// 	'#F59E0B',
// 	'#10B981',
// 	'#EF4444',
// 	'#8B5CF6',
// 	'#14B8A6',
// ]

// export default function Statistics({ orders }: { orders: IOrder[] }) {
// 	// 🔹 1. Oylik savdo

// 	const categoryData = useMemo(() => {
// 		const data: Record<string, number> = {}

// 		orders.forEach(order => {
// 			order.products.forEach(p => {
// 				const category = p.product?.category || 'Boshqa'
// 				const price = p.product?.price || 0
// 				const percent = p.product?.percent || 0
// 				const discounted = price - (price * percent) / 100
// 				const revenue = discounted * (p.soni || 0)
// 				data[category] = (data[category] || 0) + revenue
// 			})
// 		})

// 		return Object.entries(data).map(([name, value]) => ({ name, value }))
// 	}, [orders])

// 	const totalCategoryRevenue = categoryData.reduce((acc, d) => acc + d.value, 0)

// 	return (
// 		<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
// 			<Card className='shadow-xl rounded-2xl col-span-2'>
// 				<CardHeader>
// 					<CardTitle className='text-xl font-semibold'>
// 						🥧 Kategoriya bo‘yicha daromad
// 					</CardTitle>
// 					<p className='text-sm text-gray-500'>
// 						Qaysi kategoriya umumiy daromadda qancha foiz olgan
// 					</p>
// 				</CardHeader>
// 				<CardContent className='h-[300px] flex justify-center items-center relative'>
// 					<ResponsiveContainer width='100%' height='100%'>
// 						<PieChart>
// 							<Pie
// 								data={categoryData}
// 								dataKey='value'
// 								nameKey='name'
// 								cx='50%'
// 								cy='50%'
// 								innerRadius={60}
// 								outerRadius={100}
// 								label={(props: any) =>
// 									`${props.name} ${(props.percent * 100).toFixed(0)}%`
// 								}
// 							>
// 								{categoryData.map((entry, index) => (
// 									<Cell
// 										key={`cell-${index}`}
// 										fill={COLORS[index % COLORS.length]}
// 									/>
// 								))}
// 							</Pie>

// 							<Tooltip
// 								formatter={(value: number) => [
// 									`${value.toLocaleString()} so‘m`,
// 									'Daromad',
// 								]}
// 							/>
// 						</PieChart>
// 					</ResponsiveContainer>

// 					{/* Markazdagi umumiy */}
// 					<div className='absolute text-center'>
// 						<p className='text-xs text-gray-500'>Umumiy</p>
// 						<p className='text-md font-bold text-indigo-600'>
// 							{totalCategoryRevenue.toLocaleString()} so‘m
// 						</p>
// 					</div>
// 				</CardContent>
// 			</Card>
// 		</div>
// 	)
// }
// 'use client'

// import { IOrder } from '@/app.types'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { useMemo } from 'react'
// import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

// const COLORS = [
// 	'#3B82F6',
// 	'#F59E0B',
// 	'#10B981',
// 	'#EF4444',
// 	'#8B5CF6',
// 	'#14B8A6',
// ]

// export default function Statistics({ orders }: { orders: IOrder[] }) {
// 	// 🔹 Kategoriya bo‘yicha foiz
// 	const categoryData = useMemo(() => {
// 		const data: Record<string, number> = {}

// 		orders.forEach(order => {
// 			order.products.forEach(p => {
// 				const category = p.product?.category || 'Boshqa'
// 				const price = p.product?.price || 0
// 				const percent = p.product?.percent || 0
// 				const discounted = price - (price * percent) / 100
// 				const revenue = discounted * (p.soni || 0)
// 				data[category] = (data[category] || 0) + revenue
// 			})
// 		})

// 		return Object.entries(data).map(([name, value]) => ({ name, value }))
// 	}, [orders])

// 	const totalCategoryRevenue = categoryData.reduce((acc, d) => acc + d.value, 0)

// 	// 🔹 Eng ko‘p sotilgan mahsulotlar (daromad bo‘yicha TOP 5)
// 	const topProducts = useMemo(() => {
// 		const data: Record<string, number> = {}

// 		orders.forEach(order => {
// 			order.products.forEach(p => {
// 				const name = p.product?.name || 'Noma’lum'
// 				const price = p.product?.price || 0
// 				const percent = p.product?.percent || 0
// 				const discounted = price - (price * percent) / 100
// 				const revenue = discounted * (p.soni || 0)
// 				data[name] = (data[name] || 0) + revenue
// 			})
// 		})

// 		return Object.entries(data)
// 			.map(([name, value]) => ({ name, value }))
// 			.sort((a, b) => b.value - a.value)
// 			.slice(0, 5)
// 	}, [orders])

// 	return (
// 		<div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
// 			{/* 🥧 Kategoriya bo‘yicha daromad */}
// 			<Card className='shadow-xl rounded-2xl col-span-2'>
// 				<CardHeader>
// 					<CardTitle className='text-xl font-semibold'>
// 						🥧 Kategoriya bo‘yicha daromad
// 					</CardTitle>
// 					<p className='text-sm text-gray-500'>
// 						Qaysi kategoriya umumiy daromadda qancha foiz olgan
// 					</p>
// 				</CardHeader>
// 				<CardContent className='h-[300px] flex justify-center items-center relative'>
// 					<ResponsiveContainer width='100%' height='100%'>
// 						<PieChart>
// 							<Pie
// 								data={categoryData}
// 								dataKey='value'
// 								nameKey='name'
// 								cx='50%'
// 								cy='50%'
// 								innerRadius={60}
// 								outerRadius={100}
// 								label={(props: any) =>
// 									`${props.name} ${(props.percent * 100).toFixed(0)}%`
// 								}
// 							>
// 								{categoryData.map((entry, index) => (
// 									<Cell
// 										key={`cell-${index}`}
// 										fill={COLORS[index % COLORS.length]}
// 									/>
// 								))}
// 							</Pie>

// 							<Tooltip
// 								formatter={(value: number) => [
// 									`${value.toLocaleString()} so‘m`,
// 									'Daromad',
// 								]}
// 							/>
// 						</PieChart>
// 					</ResponsiveContainer>

// 					{/* Markazdagi umumiy */}
// 					<div className='absolute text-center'>
// 						<p className='text-xs text-gray-500'>Umumiy</p>
// 						<p className='text-md font-bold text-indigo-600'>
// 							{totalCategoryRevenue.toLocaleString()} so‘m
// 						</p>
// 					</div>
// 				</CardContent>
// 			</Card>

// 			{/* 🏆 Eng ko‘p sotilgan mahsulotlar */}
// 			<Card className='shadow-xl rounded-2xl'>
// 				<CardHeader>
// 					<CardTitle className='text-xl font-semibold'>
// 						🏆 Top 5 mahsulotlar
// 					</CardTitle>
// 					<p className='text-sm text-gray-500'>
// 						Eng ko‘p daromad keltirgan mahsulotlar
// 					</p>
// 				</CardHeader>
// 				<CardContent>
// 					<ul className='space-y-3'>
// 						{topProducts.map((p, index) => (
// 							<li
// 								key={index}
// 								className='flex justify-between items-center p-2 rounded-lg hover:bg-gray-50 transition'
// 							>
// 								<div className='flex items-center space-x-3'>
// 									<div
// 										className='w-6 h-6 rounded-full'
// 										style={{
// 											backgroundColor: COLORS[index % COLORS.length],
// 										}}
// 									></div>
// 									<span className='font-medium'>{p.name}</span>
// 								</div>
// 								<span className='text-sm font-semibold text-gray-700'>
// 									{p.value.toLocaleString()} so‘m
// 								</span>
// 							</li>
// 						))}
// 					</ul>
// 				</CardContent>
// 			</Card>
// 		</div>
// 	)
// }
'use client'

import { IOrder } from '@/app.types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import { useMemo } from 'react'
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts'

const COLORS = [
	'#3B82F6',
	'#F59E0B',
	'#10B981',
	'#EF4444',
	'#8B5CF6',
	'#14B8A6',
]

export default function Statistics({ orders }: { orders: IOrder[] }) {
	// 🔹 1. Kategoriya bo‘yicha daromad
	const categoryData = useMemo(() => {
		const data: Record<string, number> = {}

		orders.forEach(order => {
			order.products.forEach(p => {
				const category = p.product?.category || 'Boshqa'
				const price = p.product?.price || 0
				const percent = p.product?.percent || 0
				const discounted = price - (price * percent) / 100
				const revenue = discounted * (p.soni || 0)
				data[category] = (data[category] || 0) + revenue
			})
		})

		return Object.entries(data).map(([name, value]) => ({ name, value }))
	}, [orders])

	const totalCategoryRevenue = categoryData.reduce((acc, d) => acc + d.value, 0)

	// 🔹 2. Eng ko‘p sotilgan mahsulotlar
	const topProducts = useMemo(() => {
		const map = new Map<
			string,
			{ name: string; image: string; totalSold: number; totalRevenue: number }
		>()

		orders.forEach(order => {
			order.products.forEach(p => {
				if (!p.product?._id) return
				const id = p.product._id
				const price = p.product.price || 0
				const percent = p.product.percent || 0
				const discounted = price - (price * percent) / 100
				const revenue = discounted * (p.soni || 0)

				if (!map.has(id)) {
					map.set(id, {
						name: p.product.name,
						image: p.product.images?.[0] || '/no-image.png',
						totalSold: p.soni || 0,
						totalRevenue: revenue,
					})
				} else {
					const prev = map.get(id)!
					map.set(id, {
						...prev,
						totalSold: prev.totalSold + (p.soni || 0),
						totalRevenue: prev.totalRevenue + revenue,
					})
				}
			})
		})

		return Array.from(map.values())
			.sort((a, b) => b.totalRevenue - a.totalRevenue)
			.slice(0, 3) // faqat top 5
	}, [orders])

	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 '>
			{/* PieChart */}
			<Card className='shadow-xl rounded-2xl col-span-2'>
				<CardHeader>
					<CardTitle className='text-xl font-semibold '>
						📊 Kategoriya bo‘yicha daromad
					</CardTitle>
					<p className='text-sm text-gray-500'>
						Qaysi kategoriya umumiy daromadda qancha foiz olgan
					</p>
				</CardHeader>
				<CardContent className='h-[300px] flex justify-center items-center relative'>
					<ResponsiveContainer width='100%' height='100%'>
						<PieChart>
							<Pie
								data={categoryData}
								dataKey='value'
								nameKey='name'
								cx='50%'
								cy='50%'
								innerRadius={60}
								outerRadius={100}
								// eslint-disable-next-line @typescript-eslint/no-explicit-any
								label={(props: any) =>
									`${props.name} ${(props.percent * 100).toFixed(0)}%`
								}
							>
								{categoryData.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Pie>
							<Tooltip
								formatter={(value: number) => [
									`${value.toLocaleString()} so‘m`,
									'Daromad',
								]}
							/>
						</PieChart>
					</ResponsiveContainer>

					{/* Markazdagi umumiy */}
					<div className='absolute text-center'>
						<p className='text-xs text-gray-500'>Umumiy</p>
						<p className='text-md font-bold text-indigo-600'>
							{totalCategoryRevenue.toLocaleString()} so‘m
						</p>
					</div>
				</CardContent>
			</Card>

			{/* Top Products */}
			<Card className='shadow-xl rounded-2xl'>
				<CardHeader>
					<CardTitle className='text-xl font-semibold'>
						🏆 Eng ko‘p sotilgan mahsulotlar
					</CardTitle>
					<p className='text-sm text-gray-500'>Top 3 mahsulotlar</p>
				</CardHeader>
				<CardContent className='space-y-4'>
					{topProducts.map((p, idx) => (
						<div
							key={idx}
							className='flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 transition'
						>
							<Image
								src={p.image}
								alt={p.name}
								width={40}
								height={40}
								className='rounded-md object-cover'
							/>
							<div className='flex-1'>
								<p className='font-medium text-sm'>{p.name}</p>
								<p className='text-xs text-gray-500'>{p.totalSold} dona</p>
							</div>
							<p className='font-semibold text-sm text-green-600'>
								{p.totalRevenue.toLocaleString()} so‘m
							</p>
						</div>
					))}
				</CardContent>
			</Card>
		</div>
	)
}
