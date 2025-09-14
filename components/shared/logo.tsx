import Image from 'next/image'
import Link from 'next/link'

function Logo() {
	return (
		<Link href={'/'}>
			<Image
				src='/logotip.png'
				alt='logo'
				width={160}
				height={160}
				className='rounded-full transition-transform duration-500 hover:scale-105 hover:rotate-6 cursor-pointer'
			/>
		</Link>
	)
}

export default Logo
