'use client'
import { navLinks } from '@/components/constants'
import Logo from '@/components/shared/logo'
import UserBox from '@/components/shared/user-box'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { RootState } from '@/redux/store'
import { SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { Heart, LogIn, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import GlobalSearch from './global-search'
import LngMenu from './lng-menu'

function NavBar() {
	const { lng } = useParams()
	const pathname = usePathname()
	const newPathname = pathname.slice(4)

	const [favoritesLength, setFavoritesLength] = useState(0)
	// ?

	//
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
					<GlobalSearch />

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
			<GlobalSearch />

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
