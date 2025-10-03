// 'use client'

// import Header from '@/components/shared/header'
// import TopBar from '@/components/shared/top-bar'
// import { Button } from '@/components/ui/button'
// import { Input } from '@/components/ui/input'
// import { Textarea } from '@/components/ui/textarea'

// export default function ContactSection() {
// 	return (
// 		<>
// 			<TopBar label='Biz bilan bog`lanish' />
// 			<div className='max-w-6xl mx-auto px-3'>
// <Header
// 	title={'Biz bilan bog`lanish'}
// 	description={
// 		'Biz bilan bog`lanish uchun ushbu raqamlarga tel qiling '
// 	}
// />
// 				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
// 					<div className='space-y-6 p-6 rounded-2xl bg-white shadow-sm'>
// 						<div className='space-y-4 text-gray-800 text-sm'>
// 							<div>
// 								<p className='font-medium'>📞 Telefon</p>
// 								<p>+998 90 123 45 67</p>
// 							</div>
// 							<div>
// 								<p className='font-medium'>📧 Email</p>
// 								<p>example@gmail.com</p>
// 							</div>
// 							<div>
// 								<p className='font-medium'>🕘 Ish vaqti</p>
// 								<p>09:00 – 19:00</p>
// 							</div>
// 							<div>
// 								<p className='font-medium'>📍 Manzil</p>
// 								<p>Toshkent shahar, Chilonzor tumani, 123-ko‘cha</p>
// 							</div>
// 						</div>
// 					</div>

// 					{/* O'ngdagi forma */}
// 					<form className='space-y-4 p-6 rounded-2xl bg-white shadow-sm'>
// 						<Input placeholder='Ismingiz' />
// 						<Input type='email' placeholder='Email manzilingiz' />

// 						<Input type='tel' placeholder='+998 __ ___ __ __' />
// 						<Textarea
// 							placeholder='Xabaringizni yozing...'
// 							className='min-h-[120px]'
// 						/>

// 						<Button className='w-full bg-black text-white hover:bg-gray-800'>
// 							Yuborish
// 						</Button>
// 					</form>
// 				</div>
// 			</div>
// 		</>
// 	)
// }
'use client'

import TopBar from '@/components/shared/top-bar'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function ContactPage() {
	return (
		<>
			<TopBar label='Biz bilan bog`lanish' />
			<div className='max-w-6xl mx-auto px-3 mt-8 max-md:mt-4'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
					<Card className='shadow-md rounded-2xl border border-gray-200'>
						<CardHeader>
							<CardTitle className='text-xl font-bold '>
								Biz bilan bog‘laning
							</CardTitle>
							<p className='text-gray-500 text-sm'>
								Batafsil ma’lumot olish uchun quyidagi manzillardan foydalaning
							</p>
						</CardHeader>
						<CardContent className='space-y-6 text-gray-700'>
							<div>
								<p className='font-semibold'>📞 Telefon</p>
								<p className='text-sm text-gray-600'>+998 90 201 58 58</p>
							</div>
							<div>
								<p className='font-semibold'>📧 Email</p>
								<p className='text-sm text-gray-600'>body-pit@gmail.com</p>
							</div>
							<div>
								<p className='font-semibold'>🕘 Ish vaqti</p>
								<p className='text-sm text-gray-600'>09:00 – 20:00</p>
							</div>
							<div>
								<p className='font-semibold'>📍 Manzil</p>
								<p className='text-sm text-gray-600'>
									Fargona shahar, Margilon 8B-Uy
								</p>
							</div>
						</CardContent>
					</Card>
					{/* O'ng card – Forma */}
					<Card className='shadow-md rounded-2xl border border-gray-200'>
						<CardHeader>
							<CardTitle className='text-xl font-bold '>
								Xabar yuborish
							</CardTitle>
							<p className='text-gray-500 text-sm'>
								Shaklni to‘ldiring va biz tez orada siz bilan bog‘lanamiz
							</p>
						</CardHeader>
						<CardContent>
							<form className='space-y-4'>
								<Input placeholder='Ismingiz' />
								<Input type='email' placeholder='Email manzilingiz' />

								<Select>
									<SelectTrigger>
										<SelectValue placeholder='Qaysi xizmatga qiziqasiz?' />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value='web'>Web Dasturlash</SelectItem>
										<SelectItem value='design'>UI/UX Dizayn</SelectItem>
										<SelectItem value='seo'>SEO Xizmatlari</SelectItem>
									</SelectContent>
								</Select>

								<Input type='tel' placeholder='+998 __ ___ __ __' />
								<Textarea
									placeholder='Xabaringizni yozing...'
									className='min-h-[120px]'
								/>

								<Button className='w-full bg-black text-white hover:bg-gray-800'>
									Yuborish
								</Button>
							</form>
						</CardContent>
					</Card>
				</div>
			</div>
		</>
	)
}
