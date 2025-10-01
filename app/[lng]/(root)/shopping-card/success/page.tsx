import { retrievePayment } from '@/actions/stripe-action'
import { searchParamsProps } from '@/app.types'
import TopBar from '@/components/shared/top-bar'
import { Button } from '@/components/ui/button'
import { dollorKurs, formatPrice, usdToUzs } from '@/lib/utils'
import { format } from 'date-fns'
import { GaugeCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'

async function Page({ searchParams }: searchParamsProps) {
	const payment = await retrievePayment(searchParams.pi!)
	return (
		<>
			<TopBar label={'Tashrif buyurish'} extra={'Muvaffaqiyatli!'} />

			<div className='container mx-auto mt-12 flex max-w-4xl flex-col items-center justify-center space-y-2'>
				<Image src={'/success.png'} alt='success' width={200} height={200} />

				<div className='text-center'>
					<h1 className='font-space-grotesk text-2xl font-bold'>
						{'Sizning buyurtmangiz yakunlandi!'}
					</h1>
					<p className='text-sm text-muted-foreground'>
						{'Rahmat, Tez orada sizga aloqaga chiqamiz'}
					</p>

					<Button
						className='mt-4 rounded-lg bg-blue-600 hover:bg-blue-700'
						size={'lg'}
						asChild
					>
						<Link href={'/'}>
							<span>{'Boshqaruv paneli'}</span>
							<GaugeCircle className='ml-1 size-4' />
						</Link>
					</Button>

					<div className='mt-4 grid w-full grid-cols-4 gap-4 rounded-lg border border-dashed border-primary p-8 max-md:grid-cols-1'>
						<div className='flex flex-col items-start'>
							<h2 className='font-space-grotesk font-bold'>
								{'Buyurtma raqami'}
							</h2>
							<p className='text-sm font-bold text-primary'>
								#{payment.metadata.orderId}
							</p>
						</div>

						<div className='flex flex-col items-start'>
							<h2 className='font-space-grotesk font-bold'>{'Sana'}</h2>
							<p className='text-sm font-bold text-primary'>
								{format(new Date(payment.created * 1000), 'dd/MM/yyyy')}
							</p>
						</div>

						<div className='flex flex-col items-start'>
							<h2 className='font-space-grotesk font-bold'>{'Umumiy'}</h2>
							<p className='text-sm font-bold text-primary'>
								{formatPrice(usdToUzs(payment.amount, dollorKurs))}
							</p>
						</div>

						<div className='flex flex-col items-start'>
							<h2 className='font-space-grotesk font-bold'>Tolov usuli</h2>
							<p className='text-sm font-bold text-primary'>
								{typeof payment.payment_method === 'string'
									? ''
									: payment.payment_method?.card?.brand}{' '}
								****{' '}
								{typeof payment.payment_method === 'string'
									? ''
									: payment.payment_method?.card?.last4}
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Page
