import Logo from '@/components/shared/logo'
import UserBox from '@/components/shared/user-box'

function Navbar() {
	return (
		<div className='fixed inset-0 h-[10vh] flex items-center border-b justify-between z-50 bg-background px-6'>
			<Logo />
			<h1 className='font-space-grotesk text-center text-muted-foreground'>
				Admin & Control panel web management
			</h1>
			<div className='flex items-center gap-8 '>
				<UserBox />
			</div>
		</div>
	)
}

export default Navbar
