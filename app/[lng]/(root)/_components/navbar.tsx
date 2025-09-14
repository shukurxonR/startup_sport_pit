'use client'
import { navLinks } from '@/components/constants'
import Logo from '@/components/shared/logo'
import UserBox from '@/components/shared/user-box'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { SignUpButton, SignedIn, SignedOut } from '@clerk/nextjs'
import { Heart, LogIn, Search, ShoppingCart } from 'lucide-react'
import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'
import LngMenu from './lng-menu'
function NavBar() {
	const { lng } = useParams()
	const pathname = usePathname()
	const newPathname = pathname.slice(4)
	console.log(newPathname)
	return (
		<>
			{/* Asosiy nav */}
			<div className='fixed inset-x-0 top-0 h-20 bg-gray-50  z-50 bg-background/70 backdrop-blur-xl'>
				<div className='max-w-6xl mx-auto h-full flex items-center justify-between'>
					<Logo />

					<div className='relative w-[420px]'>
						<Search className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5' />
						<Input
							type='text'
							placeholder='Search products...'
							className='pl-10 pr-4 py-2 w-full rounded-full border border-gray-300 
                  focus-visible:ring-0 focus-visible:ring-offset-0 focus:outline-none
                   focus:shadow-sm focus:shadow-red-800 
                   transition'
						/>
					</div>

					<div className='flex items-center gap-4'>
						<LngMenu />
						<Button variant={'ghost'}>
							<Heart className='hover:scale-110 transition-transform duration-300 !size-5' />
						</Button>
						<Button variant={'ghost'}>
							<ShoppingCart className='hover:scale-110 transition-transform duration-300 !size-5' />
						</Button>

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

			{/* Kategoriya nav */}
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
		</>
	)
}

export default NavBar
