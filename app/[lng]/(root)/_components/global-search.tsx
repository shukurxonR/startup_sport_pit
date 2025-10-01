'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { formUrlQuery, removeKeysFromQuery } from '@/lib/utils'
import { Search, TableOfContents } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent } from 'react'

function GlobalSearch() {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()

	function onInpChange(e: ChangeEvent<HTMLInputElement>) {
		const value = e.target.value
		const isProductPage = pathname.split('/').includes('products')

		if (value && value.length > 1) {
			const newUrl = formUrlQuery({
				params: searchParams.toString(),
				key: 'search',
				value,
				toProducts: isProductPage ? false : true,
			})
			router.push(newUrl)
		} else {
			const newUrl = removeKeysFromQuery({
				params: searchParams.toString(),
				keysToRemove: ['search'],
			})
			router.push(newUrl)
		}
	}
	return (
		<>
			<div className='relative w-[420px] max-md:hidden'>
				<Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5' />
				<Input
					type='text'
					onChange={onInpChange}
					placeholder='Search products...'
					className='pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 
                  focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none
                   focus:shadow-sm focus:shadow-red-800 
                   transition'
				/>
			</div>
			<div className='flex items-center  md:hidden mt-24 px-3 gap-2'>
				<div className=' relative w-full'>
					<Search className='absolute left-3 inset-y-0 my-auto text-gray-400 size-5' />
					<Input
						type='text'
						onChange={onInpChange}
						placeholder='Mahsulot izlash...'
						className='pl-10 pr-4 py-2 w-full border border-gray-300  bg-gray-100
               rounded-lg
               focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none
               focus:shadow-sm focus:shadow-red-800
               transition'
					/>
				</div>
				<Button size={'icon'} variant={'outline'}>
					<TableOfContents />
				</Button>
			</div>
		</>
	)
}

export default GlobalSearch
