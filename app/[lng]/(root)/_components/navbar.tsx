'use client'
import { navLinks } from '@/components/constants'
import Logo from '@/components/shared/logo'
import UserBox from '@/components/shared/user-box'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn, formUrlQuery, removeKeysFromQuery } from '@/lib/utils'
import { RootState } from '@/redux/store'
import { SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs'
import {
	Heart,
	LogIn,
	Search,
	ShoppingCart,
	TableOfContents,
} from 'lucide-react'
import Link from 'next/link'
import {
	useParams,
	usePathname,
	useRouter,
	useSearchParams,
} from 'next/navigation'
import { ChangeEvent, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import LngMenu from './lng-menu'
function NavBar() {
	const { lng } = useParams()
	const pathname = usePathname()
	const newPathname = pathname.slice(4)
	const searchParams = useSearchParams()
	const router = useRouter()
	console.log(newPathname)
	const [favoritesLength, setFavoritesLength] = useState(0)
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

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const stored = localStorage.getItem('favorites')
			setFavoritesLength(stored ? JSON.parse(stored).length : 0)
		}
	}, [])

	const basketProducts = useSelector(
		(state: RootState) => state.basket.basketProducts
	)

	return (
		<>
			{/* Asosiy nav */}
			<div className='fixed inset-x-0 top-0 h-20 bg-gray-50  z-50 bg-background/70 backdrop-blur-xl border-b max-md:pr-3'>
				<div className='max-w-6xl mx-auto h-full flex items-center justify-between'>
					<Logo />

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

					<div className='flex items-center gap-2'>
						<div className='max-md:hidden'>
							<LngMenu />
						</div>
						<div className='flex gap-2'>
							<Link href='/favorite'>
								{favoritesLength > 0 ? (
									<Button variant='outline' size='icon' className='relative '>
										<Heart className='hover:scale-110 transition-transform duration-300 !size-5 text-red-500' />
										<span
											className='absolute -top-1 -right-1 flex items-center justify-center
            w-5 h-5 rounded-full bg-red-500 text-white text-[11px] font-medium shadow-md'
										>
											{favoritesLength}
										</span>
									</Button>
								) : (
									<Button variant={'ghost'}>
										<Heart className='hover:scale-110 transition-transform duration-300 !size-5' />{' '}
									</Button>
								)}
							</Link>
							<Link href='/shopping-card/card' className='mr-4'>
								{basketProducts.length > 0 ? (
									<Button variant='outline' size='icon' className='relative'>
										<ShoppingCart className='hover:scale-110 transition-transform duration-300 !size-5 text-green-700' />
										<span
											className='absolute -top-1 -right-1 flex items-center justify-center
            w-5 h-5 rounded-full bg-green-700 text-white text-[11px] font-medium shadow-md'
										>
											{basketProducts.length}
										</span>
									</Button>
								) : (
									<Button variant={'ghost'}>
										<ShoppingCart className='hover:scale-110 transition-transform duration-300 !size-5' />{' '}
									</Button>
								)}
							</Link>
						</div>
						<SignedOut>
							{/* <SignInButton></SignInButton> */}
							<SignUpButton mode='modal'>
								<Button variant={'ghost'}>
									<LogIn className='hover:scale-110 transition-transform duration-300 !size-5' />
								</Button>
							</SignUpButton>
						</SignedOut>
						<SignedIn>
							<UserBox />
						</SignedIn>
					</div>
				</div>
			</div>
			<div className='flex items-center  md:hidden mt-24 px-3 gap-2'>
				<div className=' relative w-full'>
					{/* Search Icon */}
					<Search className='absolute left-3 inset-y-0 my-auto text-gray-400 size-5' />

					{/* Input */}
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

			{/* Kategoriya nav */}
			<div className='max-md:hidden'>
				<div className='mt-24 '>
					<div className='max-w-6xl mx-auto'>
						<div className='grid grid-cols-6  gap-2'>
							{navLinks.map(page =>
								page.route === 'categories' ? (
									<Link
										href={`/${lng}#categories`}
										className='flex w-full items-center justify-start bg-gray-100 px-4 py-2 font-semibold transition-colors cursor-pointer'
										key={page.route}
									>
										<page.icon className='mr-2 size-4' />
										<h1>{page.name}</h1>
									</Link>
								) : (
									<Link key={page.route} href={`/${page.route}`}>
										<div
											className={cn(
												'flex w-full items-center justify-start bg-gray-100 px-4 py-2 font-semibold transition-colors cursor-pointer',
												newPathname === page.route ? 'bg-blue-100' : null
											)}
										>
											<page.icon className='mr-2 size-4' />
											<h1>{page.name}</h1>
										</div>
									</Link>
								)
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default NavBar
