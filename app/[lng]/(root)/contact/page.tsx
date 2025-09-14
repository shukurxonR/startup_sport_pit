import ContactForm from '@/components/forms/contact-form'
import TopBar from '@/components/shared/top-bar'

async function Page() {
	return (
		<>
			{/* <TopBar label='blogs' description='lorem' /> */}
			<TopBar label='Contact' />
			<div className='container mx-auto max-w-6xl '>
				<div className='mt-10 grid grid-cols-2 gap-4'>
					<div className='flex flex-col gap-4'>
						<div>
							<h3 className='text-3xl font-semibold mb-2'>Часы работы</h3>
							<p className='text-slate-700'>
								Понедельник-пятница: с 09:00 до 18:00
							</p>
							<div className='mt-2 space-y-1'>
								<p className='text-blue-600 hover:text-blue-800 cursor-pointer'>
									+998 (91) 1916066
								</p>
								<p className='text-blue-600 hover:text-blue-800 cursor-pointer'>
									+998 (99) 4955313
								</p>
							</div>
						</div>

						<div className='border-t pt-4'>
							<h3 className='text-lg font-semibold mb-2'>Электронная почта</h3>
							<p className='text-slate-700 mb-2'>
								Нужна помощь с вашим заказом?
							</p>
							<p className='text-blue-600 hover:text-blue-800 cursor-pointer'>
								alipil@gmail.com
							</p>
						</div>

						{/* <div className='border-t pt-4'>
							<h3 className='text-lg font-semibold mb-2'>
								Подписывайтесь на нас
							</h3>
						</div> */}
					</div>

					<div>
						<h1 className='mb-4 font-space-grotesk max-md:text-3xl text-3xl  font-semibold '>
							@<span className='text-xl'> Contact Body-pit</span>
						</h1>
						<ContactForm />
					</div>
				</div>
			</div>
		</>
	)
}

export default Page

// import { Button } from '@/components/ui/button'
// import {
// 	Card,
// 	CardContent,
// 	CardDescription,
// 	CardHeader,
// 	CardTitle,
// } from '@/components/ui/card'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'
// import {
// 	Select,
// 	SelectContent,
// 	SelectItem,
// 	SelectTrigger,
// 	SelectValue,
// } from '@/components/ui/select'
// import { Textarea } from '@/components/ui/textarea'

// export default function Page() {
// 	return (
// 		<div className='min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4 sm:px-6 lg:px-8'>
// 			<div className='max-w-4xl mx-auto'>
// 				<div className='text-center mb-12'>
// 					<h1 className='text-4xl font-bold text-slate-900 mb-2'>
// 						Свяжитесь с нами
// 					</h1>
// 					<p className='text-xl text-slate-600 mb-4'>Сегодня</p>
// 					<p className='text-lg text-slate-700 max-w-2xl mx-auto'>
// 						Мы постараемся ответить на ваш звонок в течение 24 часов или вы
// 						можете заполнить форму с вашим вопросом и мы свяжемся с вами.
// 					</p>
// 				</div>

// 				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
// 					{/* Контактная информация */}
// 					<Card className='shadow-lg'>
// 						<CardHeader>
// 							<CardTitle>Контактная информация</CardTitle>
// 							<CardDescription>
// 								Свяжитесь с нами удобным для вас способом
// 							</CardDescription>
// 						</CardHeader>
// 						<CardContent className='space-y-6'>
// 							<div>
// 								<h3 className='text-lg font-semibold mb-2'>Часы работы</h3>
// 								<p className='text-slate-700'>
// 									Понедельник-пятница: с 09:00 до 18:00
// 								</p>
// 								<div className='mt-2 space-y-1'>
// 									<p className='text-blue-600 hover:text-blue-800 cursor-pointer'>
// 										+998 (91) 1916066
// 									</p>
// 									<p className='text-blue-600 hover:text-blue-800 cursor-pointer'>
// 										+998 (99) 4955313
// 									</p>
// 								</div>
// 							</div>

// 							<div className='border-t pt-4'>
// 								<h3 className='text-lg font-semibold mb-2'>
// 									Электронная почта
// 								</h3>
// 								<p className='text-slate-700 mb-2'>
// 									Нужна помощь с вашим заказом?
// 								</p>
// 								<p className='text-blue-600 hover:text-blue-800 cursor-pointer'>
// 									alipil@gmail.com
// 								</p>
// 							</div>

// 							<div className='border-t pt-4'>
// 								<h3 className='text-lg font-semibold mb-2'>
// 									Подписывайтесь на нас
// 								</h3>
// 							</div>
// 						</CardContent>
// 					</Card>

// 					{/* Форма обратной связи */}
// 					<Card className='shadow-lg'>
// 						<CardHeader>
// 							<CardTitle>Форма обратной связи</CardTitle>
// 							<CardDescription>
// 								Заполните форму и мы свяжемся с вами
// 							</CardDescription>
// 						</CardHeader>
// 						<CardContent>
// 							<form className='space-y-4'>
// 								<div className='space-y-2'>
// 									<Label htmlFor='name'>Имя</Label>
// 									<Input
// 										id='name'
// 										name='name'
// 										placeholder='Ваше имя'
// 										required
// 									/>
// 								</div>

// 								<div className='space-y-2'>
// 									<Label htmlFor='email'>Электронная почта</Label>
// 									<Input
// 										id='email'
// 										name='email'
// 										type='email'
// 										placeholder='Ваш email'
// 										required
// 									/>
// 								</div>

// 								<div className='space-y-2'>
// 									<Label htmlFor='subject'>Предмет</Label>
// 									<Select required>
// 										<SelectTrigger>
// 											<SelectValue placeholder='Выберите предмет' />
// 										</SelectTrigger>
// 										<SelectContent>
// 											<SelectItem value='general'>Общий вопрос</SelectItem>
// 											<SelectItem value='order'>Помощь с заказом</SelectItem>
// 											<SelectItem value='support'>
// 												Техническая поддержка
// 											</SelectItem>
// 											<SelectItem value='other'>Другое</SelectItem>
// 										</SelectContent>
// 									</Select>
// 								</div>

// 								<div className='space-y-2'>
// 									<Label htmlFor='message'>Сообщение</Label>
// 									<Textarea
// 										id='message'
// 										name='message'
// 										placeholder='Ваше сообщение'
// 										rows={5}
// 										required
// 									/>
// 								</div>

// 								<Button
// 									type='submit'
// 									className='w-full bg-blue-600 hover:bg-blue-700'
// 								>
// 									Отправить сообщение
// 								</Button>
// 							</form>
// 						</CardContent>
// 					</Card>
// 				</div>
// 			</div>
// 		</div>
// 	)
// }
