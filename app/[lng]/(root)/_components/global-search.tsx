'use client'
import { navLinks } from '@/components/constants'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Sheet, SheetClose, SheetContent } from '@/components/ui/sheet'
import { cn, formUrlQuery, removeKeysFromQuery } from '@/lib/utils'
import { RootState } from '@/redux/store'
import { useUser } from '@clerk/nextjs'
import {
	GalleryVerticalEnd,
	Handbag,
	Heart,
	Search,
	TableOfContents,
} from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEvent, useState } from 'react'
import { useSelector } from 'react-redux'
function GlobalSearch() {
	const searchParams = useSearchParams()
	const router = useRouter()
	const pathname = usePathname()
	const [open, setOpen] = useState(false)
	const newPathname = pathname.slice(4)
	const { user } = useUser()
	const basketProducts = useSelector(
		(state: RootState) => state.basket.basketProducts
	)

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
				<Button size={'icon'} variant={'outline'} onClick={() => setOpen(true)}>
					<TableOfContents />
				</Button>
			</div>
			<Sheet open={open} onOpenChange={setOpen}>
				{/* Sidebar Content */}
				<SheetContent side='left' className='w-72 p-4 flex flex-col'>
					{/* Logo + Search */}

					<div className='flex items-center gap-2 mb-6'>
						<GalleryVerticalEnd />
						<span className='font-bold text-lg'>
							Body-pit <span className='text-xs text-gray-400'></span>
						</span>
					</div>
					<Separator />
					{/*  */}
					<nav className='flex flex-col gap-4 text-gray-700 flex-1'>
						{navLinks.map(link =>
							link.route === 'categories' ? (
								<SheetClose asChild key={link.route}>
									<Link href={`/uz/#categories`}>
										<div className='flex items-center gap-2 font-medium'>
											<link.icon className='w-5 h-5' /> {link.name}
										</div>
									</Link>
								</SheetClose>
							) : (
								<SheetClose asChild key={link.route}>
									<Link href={`/${link.route}`} key={link.route}>
										<div
											className={cn(
												'flex items-center gap-2 font-medium ',
												newPathname === link.route ? 'text-blue-600' : ''
											)}
										>
											<link.icon className='!size-5' /> {link.name}
										</div>
									</Link>
								</SheetClose>
							)
						)}
					</nav>

					<hr className='my-4' />

					{/* Account */}
					<div className='flex flex-col gap-3'>
						<SheetClose asChild>
							<Link href={'/favorite'}>
								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-2'>
										<Heart className='w-5 h-5' /> Istaklaringiz
									</div>
									<span className='bg-red-500 text-white text-xs rounded-full px-2 py-0.5'>
										{0}
									</span>
								</div>
							</Link>
						</SheetClose>
						<SheetClose asChild>
							<Link href={'/shopping-card/card'}>
								<div className='flex items-center justify-between'>
									<div className='flex items-center gap-2'>
										<Handbag className='w-5 h-5' /> Savatingiz
									</div>
									<span className='bg-green-500 text-white text-xs rounded-full px-2 py-0.5'>
										{basketProducts.length}
									</span>
								</div>
							</Link>
						</SheetClose>
					</div>

					{/* User */}
					<div className='mt-6 flex items-center justify-between bg-gray-100 p-2 rounded-lg'>
						<div className='flex items-center gap-2'>
							<Avatar className='size-9'>
								<AvatarImage src={user?.imageUrl} />
								<AvatarFallback>US</AvatarFallback>
							</Avatar>
							<div>
								<p className='text-sm font-semibold line-clamp-1'>
									{user?.fullName}
								</p>
								<p className='text-xs text-gray-500 line-clamp-1'>
									{user?.emailAddresses?.[0]?.emailAddress}
								</p>
							</div>
						</div>
						<button className='text-gray-400'>•••</button>
					</div>
				</SheetContent>
			</Sheet>
		</>
	)
}

export default GlobalSearch
