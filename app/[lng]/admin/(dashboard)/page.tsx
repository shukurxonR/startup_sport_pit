// 'use client'
// import StatisticsCard from '@/components/cards/statistics-card'
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
// import { Box, HandCoins, Mails, Percent } from 'lucide-react'
// import {
// 	CartesianGrid,
// 	Cell,
// 	Line,
// 	LineChart,
// 	Pie,
// 	PieChart,
// 	ResponsiveContainer,
// 	Tooltip,
// 	XAxis,
// 	YAxis,
// } from 'recharts'
// import Header from '../_components/header'

// // Dummy data (MongoDB ulaganingizdan keyin dynamic bo‘ladi)
// const salesData = [
// 	{ name: 'Mon', sales: 120 },
// 	{ name: 'Tue', sales: 80 },
// 	{ name: 'Wed', sales: 200 },
// 	{ name: 'Thu', sales: 150 },
// 	{ name: 'Fri', sales: 300 },
// 	{ name: 'Sat', sales: 250 },
// 	{ name: 'Sun', sales: 180 },
// ]

// const categoryData = [
// 	{ name: 'Proteins', value: 400 },
// 	{ name: 'Creatine', value: 300 },
// 	{ name: 'Vitamins', value: 200 },
// 	{ name: 'Accessories', value: 100 },
// ]

// const COLORS = ['#2563eb', '#16a34a', '#f59e0b', '#dc2626']

// export default function DashboardPage() {
// 	return (
// 		<div>
// 			<Header title='Dashboard' description='Welcome to your dashboard' />

// 			{/* Statistic Cards */}
// 			<div className='mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4'>
// 				<StatisticsCard label='Total products' value={'4'} Icon={Box} />
// 				<StatisticsCard
// 					label='Total discount products'
// 					value={'12'}
// 					Icon={Percent}
// 				/>
// 				<StatisticsCard label='Reviews' value={'122'} Icon={Mails} />
// 				<StatisticsCard label='Total Sales' value={'$12,32'} Icon={HandCoins} />
// 			</div>

// 			{/* Charts Section */}
// 			<div className='mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2'>
// 				<Card>
// 					<CardHeader>
// 						<CardTitle>Weekly Sales</CardTitle>
// 					</CardHeader>
// 					<CardContent className='h-80'>
// 						<ResponsiveContainer width='100%' height='100%'>
// 							<LineChart data={salesData}>
// 								<CartesianGrid strokeDasharray='3 3' />
// 								<XAxis dataKey='name' />
// 								<YAxis />
// 								<Tooltip />
// 								<Line
// 									type='monotone'
// 									dataKey='sales'
// 									stroke='#2563eb'
// 									strokeWidth={2}
// 								/>
// 							</LineChart>
// 						</ResponsiveContainer>
// 					</CardContent>
// 				</Card>

// 				<Card>
// 					<CardHeader>
// 						<CardTitle>Sales by Category</CardTitle>
// 					</CardHeader>
// 					<CardContent className='h-80 flex items-center justify-center'>
// 						<ResponsiveContainer width='100%' height='100%'>
// 							<PieChart>
// 								<Pie
// 									data={categoryData}
// 									cx='50%'
// 									cy='50%'
// 									labelLine={true}
// 									label={({
// 										name,
// 										percent,
// 										x,
// 										y,
// 									}: {
// 										name?: string
// 										percent?: number
// 										x?: number
// 										y?: number
// 									}) => (
// 										<text
// 											x={x}
// 											y={y}
// 											fill='black'
// 											textAnchor='middle'
// 											dominantBaseline='central'
// 											fontSize={12}
// 										>
// 											{name} {percent ? (percent * 100).toFixed(0) : 0}%
// 										</text>
// 									)}
// 									outerRadius={100}
// 									fill='#8884d8'
// 									dataKey='value'
// 								>
// 									{categoryData.map((entry, index) => (
// 										<Cell
// 											key={`cell-${index}`}
// 											fill={COLORS[index % COLORS.length]}
// 										/>
// 									))}
// 								</Pie>

// 								<Tooltip />
// 							</PieChart>
// 						</ResponsiveContainer>
// 					</CardContent>
// 				</Card>
// 			</div>

// 			{/* Recent Activity */}
// 			<div className='mt-6'>
// 				<Card>
// 					<CardHeader>
// 						<CardTitle>Recent Activity</CardTitle>
// 					</CardHeader>
// 					<CardContent>
// 						<ul className='space-y-3 text-sm'>
// 							<li>
// 								✅ New product <b>Whey Protein</b> added
// 							</li>
// 							<li>
// 								⭐ New review added by <b>John Doe</b>
// 							</li>
// 							<li>
// 								💸 Sale completed: <b>$25.00</b>
// 							</li>
// 							<li>
// 								📉 Stock running low: <b>Creatine</b>
// 							</li>
// 						</ul>
// 					</CardContent>
// 				</Card>
// 			</div>
// 		</div>
// 	)
// }
'use client'

import { Card, CardContent } from '@/components/ui/card'
import {
	Bar,
	BarChart,
	Cell,
	Legend,
	Line,
	LineChart,
	Pie,
	PieChart,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts'

// Fake data (keyin MongoDB bilan bog'lanadi)
const salesData = [
	{ month: 'Jul', sales: 2900 },
	{ month: 'Aug', sales: 5000 },
	{ month: 'Sep', sales: 6100 },
	{ month: 'Oct', sales: 7000 },
	{ month: 'Nov', sales: 3200 },
	{ month: 'Dec', sales: 9500 },
	{ month: 'Jan', sales: 5000 },
	{ month: 'Feb', sales: 9100 },
	{ month: 'Mar', sales: 7700 },
	{ month: 'Apr', sales: 14300 },
	{ month: 'May', sales: 11000 },
	{ month: 'Jun', sales: 20000 },
]

const categoryData = [
	{ name: 'Protein', value: 40 },
	{ name: 'BCAA', value: 20 },
	{ name: 'Gainer', value: 18 },
	{ name: 'Vitamins', value: 12 },
	{ name: 'Accessories', value: 10 },
]

// Sotilgan mahsulotlar (channel emas, balki product type)
const productSalesData = [
	{ name: 'Protein', value: 32000 },
	{ name: 'Gainer', value: 24000 },
	{ name: 'BCAA', value: 18000 },
	{ name: 'Vitamins', value: 12000 },
	{ name: 'Accessories', value: 9000 },
]

const COLORS = ['#3B82F6', '#F59E0B', '#10B981', '#EF4444', '#8B5CF6']

export default function Page() {
	return (
		<div className='p-6 h-full'>
			<h1 className='text-2xl font-bold mb-6'>Dashboard</h1>

			{/* Top Stats */}
			<div className='grid grid-cols-1 md:grid-cols-4 gap-6 mb-6'>
				<Card className='shadow rounded-2xl'>
					<CardContent className='p-4'>
						<p className='text-gray-500'>Total Revenue</p>
						<h2 className='text-2xl font-bold'>$85,420</h2>
					</CardContent>
				</Card>
				<Card className='shadow rounded-2xl'>
					<CardContent className='p-4'>
						<p className='text-gray-500'>Total Orders</p>
						<h2 className='text-2xl font-bold'>2,340</h2>
					</CardContent>
				</Card>
				<Card className='shadow rounded-2xl'>
					<CardContent className='p-4'>
						<p className='text-gray-500'>Total Reviews</p>
						<h2 className='text-2xl font-bold'>1,120</h2>
					</CardContent>
				</Card>
				<Card className='shadow rounded-2xl'>
					<CardContent className='p-4'>
						<p className='text-gray-500'>Total Products</p>
						<h2 className='text-2xl font-bold'>356</h2>
					</CardContent>
				</Card>
			</div>

			{/* Sales Overview + Category Distribution */}
			<div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
				<Card className='shadow rounded-2xl lg:col-span-2'>
					<CardContent className='p-4'>
						<h3 className='font-semibold mb-4'>Monthly Sales Overview</h3>
						<ResponsiveContainer width='100%' height={300}>
							<LineChart data={salesData}>
								<XAxis
									dataKey='month'
									stroke='#9CA3AF'
									tickLine={false}
									axisLine={false}
								/>
								<YAxis stroke='#9CA3AF' tickLine={false} axisLine={false} />
								<Tooltip
									contentStyle={{
										borderRadius: '12px',
										border: '1px solid #E5E7EB',
									}}
								/>
								<Line
									type='monotone'
									dataKey='sales'
									stroke='#3B82F6'
									strokeWidth={3}
									dot={{ fill: '#3B82F6', r: 4 }}
									activeDot={{ r: 6 }}
								/>
							</LineChart>
						</ResponsiveContainer>
					</CardContent>
				</Card>

				<Card className='shadow rounded-2xl'>
					<CardContent className='p-4'>
						<h3 className='font-semibold mb-4'>Sales by Category</h3>
						<ResponsiveContainer width='100%' height={300}>
							<PieChart>
								<Pie
									data={categoryData}
									dataKey='value'
									nameKey='name'
									cx='50%'
									cy='50%'
									outerRadius={100}
									label
								>
									{categoryData.map((entry, index) => (
										<Cell
											key={`cell-${index}`}
											fill={COLORS[index % COLORS.length]}
										/>
									))}
								</Pie>
								<Tooltip />
							</PieChart>
						</ResponsiveContainer>
					</CardContent>
				</Card>
			</div>

			{/* Sales by Product Type */}
			<Card className='shadow rounded-2xl'>
				<CardContent className='p-4'>
					<h3 className='font-semibold mb-4'>Sales by Product Type</h3>
					<ResponsiveContainer width='100%' height={300}>
						<BarChart data={productSalesData}>
							<XAxis dataKey='name' stroke='#888' />
							<YAxis stroke='#888' />
							<Tooltip />
							<Legend />
							<Bar dataKey='value' radius={[8, 8, 0, 0]}>
								{productSalesData.map((entry, index) => (
									<Cell
										key={`cell-${index}`}
										fill={COLORS[index % COLORS.length]}
									/>
								))}
							</Bar>
						</BarChart>
					</ResponsiveContainer>
				</CardContent>
			</Card>
		</div>
	)
}
