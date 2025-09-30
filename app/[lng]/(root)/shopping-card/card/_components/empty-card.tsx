'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function EmptyCart() {
	return (
		<div className='flex flex-col items-center justify-center min-h-[60vh] text-center'>
			<Image
				src='/not.png' // rasmni public/images ichiga qo'y
				alt='Empty cart'
				width={200}
				height={200}
				className='mb-6'
			/>
			<h2 className='text-2xl font-semibold mb-2'>Savatingiz hozircha bo‘sh</h2>
			<p className='text-gray-500 max-w-md mb-6'>
				Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz
				yoki to‘plamlarni ko‘rishingiz mumkin
			</p>
			<Link href='/'>
				<Button variant='outline' size={'lg'} className='px-6 py-2 bg-gray-100'>
					Bosh sahifa
				</Button>
			</Link>
		</div>
	)
}
