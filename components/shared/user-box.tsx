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
	return (
		<div>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Avatar className=' size-9'>
						<AvatarImage src={user?.imageUrl} />
						<AvatarFallback>
							{user?.firstName?.charAt(2) || 'DB'}
						</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent align='end' alignOffset={11} forceMount>
					<div className='flex flex-col space-y-2 p-2'>
						<p className='font-mono text-xs  leading-none text-muted-foreground'>
							{user?.emailAddresses[0].emailAddress}
						</p>

						<div className='flex items-center gap-x-1'>
							<div className='rounded-full bg-secondary p-1'>
								<Avatar className='size-8'>
									<AvatarImage src={user?.imageUrl} />
								</Avatar>
							</div>

							<div>
								<p className='line-clamp-1 text-sm'>{user?.firstName}</p>
							</div>
						</div>
					</div>

					<DropdownMenuSeparator />
					<div className='flex flex-col gap-1'>
						{user?.emailAddresses[0].emailAddress ===
						'shukurxondev@gmail.com' ? (
							<Link href={'/admin'} className='cursor-pointer'>
								<DropdownMenuItem className='w-full cursor-pointer  font-space-grotesk'>
									Admin
								</DropdownMenuItem>
							</Link>
						) : null}
						<Link href={'/user-profile'} className='cursor-pointer'>
							<DropdownMenuItem className='w-full cursor-pointer  font-space-grotesk'>
								Info Accaunt
							</DropdownMenuItem>
						</Link>
						<Link href={'/instructor'} className='cursor-pointer'>
							<DropdownMenuItem className='w-full cursor-pointer  font-space-grotesk'>
								Insructor
							</DropdownMenuItem>
						</Link>
						<DropdownMenuItem
							asChild
							className='w-full bg-secondary  cursor-pointer'
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
