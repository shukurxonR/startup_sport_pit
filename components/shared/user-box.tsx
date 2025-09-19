'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { SignOutButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'

function UserBox() {
	const { user } = useUser()

	// fallback values
	const email =
		user?.emailAddresses?.[0]?.emailAddress || 'no-email@example.com'
	const firstName = user?.firstName || 'User'
	const avatar = user?.imageUrl || ''
	const initials = firstName.charAt(0).toUpperCase()

	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Avatar className='size-9'>
						<AvatarImage src={avatar} />
						<AvatarFallback>{initials}</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>

				<DropdownMenuContent align='end' alignOffset={11} forceMount>
					<div className='flex flex-col space-y-2 p-2'>
						<p className='font-mono text-xs leading-none text-muted-foreground'>
							{email}
						</p>

						<div className='flex items-center gap-x-1'>
							<div className='rounded-full bg-secondary p-1'>
								<Avatar className='size-8'>
									<AvatarImage src={avatar} />
									<AvatarFallback>{initials}</AvatarFallback>
								</Avatar>
							</div>

							<div>
								<p className='line-clamp-1 text-sm'>{firstName}</p>
							</div>
						</div>
					</div>

					<DropdownMenuSeparator />
					<div className='flex flex-col gap-1'>
						{email === 'shukurxondev@gmail.com' && (
							<Link href='/admin' className='cursor-pointer'>
								<DropdownMenuItem className='w-full cursor-pointer font-space-grotesk'>
									Admin
								</DropdownMenuItem>
							</Link>
						)}

						<Link href='/user-profile' className='cursor-pointer'>
							<DropdownMenuItem className='w-full cursor-pointer font-space-grotesk'>
								Info Account
							</DropdownMenuItem>
						</Link>

						<Link href='/instructor' className='cursor-pointer'>
							<DropdownMenuItem className='w-full cursor-pointer font-space-grotesk'>
								Instructor
							</DropdownMenuItem>
						</Link>

						<DropdownMenuItem
							asChild
							className='w-full bg-secondary cursor-pointer'
						>
							<SignOutButton>Sign Out</SignOutButton>
						</DropdownMenuItem>
					</div>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	)
}

export default UserBox
