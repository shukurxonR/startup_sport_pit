import { Separator } from '@/components/ui/separator'
import {
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
	Twitter,
} from 'lucide-react'
import Link from 'next/link'

function Footer() {
	return (
		<>
			<Separator className='my-4 mt-20 max-md:mt-12' />
			<footer className='bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 pt-6'>
				<div className='max-w-6xl mx-auto px-4'>
					<div className='grid grid-cols-1 md:grid-cols-4 gap-10 mb-10'>
						{/* Contact */}
						<div className='space-y-4'>
							<h2 className='text-lg font-semibold'>Biz bilan aloqa</h2>
							<div className='flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400'>
								<Phone className='w-5 h-5' />
								<span>(90) 201 58-58, (91) 813 41-41</span>
							</div>
							<div className='flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400'>
								<Mail className='w-5 h-5' />
								<span>bodybip@gmail.com</span>
							</div>
							<div className='flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400'>
								<MapPin className='w-5 h-5' />
								<span>Tashkent, Uzbekistan</span>
							</div>
						</div>

						{/* Quick Links */}
						<div className='space-y-4 max-md:hidden'>
							<h2 className='text-lg font-semibold'>Quick Links</h2>
							<ul className='space-y-2 text-sm text-zinc-600 dark:text-zinc-400'>
								<li>
									<Link href='/'>Home</Link>
								</li>
								<li>
									<Link href='/courses'>Courses</Link>
								</li>
								<li>
									<Link href='/blogs'>Blogs</Link>
								</li>
								<li>
									<Link href='/about'>About Us</Link>
								</li>
							</ul>
						</div>

						{/* About */}
						<div className='space-y-4'>
							<h2 className='text-lg font-semibold'>Biz haqimizda</h2>
							<p className='text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed'>
								Body-pit — zamonaviy va ishonchli xizmatlarni taqdim etuvchi
								platforma. Bizning maqsadimiz mijozlarga sifatli mahsulotlar va
								xizmatlar yetkazib berish.
							</p>
						</div>

						{/* Social */}
						<div className='space-y-4'>
							<h2 className='text-lg font-semibold'>Bizni kuzating</h2>
							<div className='flex gap-4'>
								<Link
									href='#'
									className='transition-transform duration-300 hover:scale-150 cursor-pointer'
								>
									<Facebook className='w-5 h-5 hover:text-blue-600 transition-colors' />
								</Link>
								<Link href='#'>
									<Instagram className='w-5 h-5 hover:text-pink-500 transition-colors' />
								</Link>
								<Link href='#'>
									<Twitter className='w-5 h-5 hover:text-sky-500 transition-colors' />
								</Link>
								<Link href='#'>
									<Linkedin className='w-5 h-5 hover:text-blue-700 transition-colors' />
								</Link>
							</div>
						</div>
					</div>

					<Separator className='my-6' />

					{/* Bottom */}
					<div className='flex flex-col md:flex-row items-center justify-between text-sm text-zinc-500 dark:text-zinc-400 pb-6'>
						<p>
							© {new Date().getFullYear()} Body-pit Company. All rights
							reserved.
						</p>
						<div className='flex gap-4 mt-3 md:mt-0'>
							<Link href='/privacy'>Privacy Policy</Link>
							<Link href='/terms'>Terms of Service</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

export default Footer
