import {
	Blocks,
	BookCopy,
	CreditCard,
	FileCode,
	GalleryVerticalEnd,
	GaugeCircle,
	Headphones,
	Home,
	MessageSquareMore,
	MonitorPlay,
	MonitorSmartphone,
	Settings2,
	ShieldCheck,
	TableOfContents,
	Truck,
} from 'lucide-react'
export const navLinks = [
	{ route: '', name: 'Home', icon: Home },
	{ route: 'categories', name: 'Categories', icon: TableOfContents },
	{ route: 'products', name: 'All products', icon: GalleryVerticalEnd },
	{ route: 'blogs', name: 'Blogs', icon: Blocks },
	{ route: 'about', name: 'About us', icon: BookCopy },
	{ route: 'contact', name: 'Contact', icon: MonitorSmartphone },
]

export const coruselBanner = [
	{ img: '/banners/banner4.webp' },
	{ img: '/banners/banner1.jpg' },
	{ img: '/banners/banner7.jpg' },
]

export const allCategories = [
	{ img: '/category/protaine.png', name: 'Protaine' },
	{ img: '/category/bcca.png', name: 'Bcca' },
	{ img: '/category/gainer.png', name: 'Gainer' },

	{ img: '/category/creatine.png', name: 'Creatine' },
	{ img: '/category/vitamin.png', name: 'Vitamins' },
	{ img: '/category/omega.png', name: 'Omega 3' },
	//
	{ img: '/category/bay.png', name: 'For Baby' },
	{ img: '/category/women.png', name: 'For women' },
]
export const products = [
	{
		id: 1,
		discount: true,
		name: 'Nucler Nutrition Synthesis multi',
		price: 130000,
		status: 'Active',
		image: '/products/creatine1.png',
		top: true,
		category: 'Protaine',
	},
	{
		id: 2,
		discount: false,
		name: 'Ultimate Orange (448 гр) (16 порц)',
		price: 350000,
		status: 'Active',
		image: '/products/mass1.jpg',
		top: true,
		category: 'Bcaa',
	},
	{
		id: 3,
		discount: true,
		name: 'Proscience Creatine 5000 300 gr',
		price: 120000,
		status: 'Active',
		image: '/products/creatine2.webp',
		top: false,
		category: 'Creatine',
	},
	{
		id: 4,
		discount: false,
		name: 'CGN, Creatine, микронизированный',
		price: 170000,
		status: 'Active',
		image: '/products/amino1.png',
		top: false,
		category: 'Creatine',
	},
	{
		id: 5,
		discount: false,
		name: 'CGN, Creatine, микронизированный',
		price: 170000,
		status: 'Active',
		image: '/products/multi1.png',
		top: true,
		category: 'Multi',
	},
	{
		id: 6,
		discount: false,
		name: 'CGN, Creatine, микронизированный',
		price: 170000,
		status: 'Active',
		image: '/products/bcca1.webp',
		top: false,
		category: 'Bcca',
	},

	{
		id: 7,
		discount: false,
		name: 'CGN, Creatine, микронизированный',
		price: 170000,
		status: 'Active',
		image: '/products/creatine3.png',
		top: true,
		category: 'Creatine',
	},
	{
		id: 8,
		discount: false,
		name: 'CGN, Creatine, микронизированный',
		price: 170000,
		status: 'Active',
		image: '/products/mass2.png',
		top: false,
		category: 'Gainer',
	},
]
export const services = [
	{
		icon: Truck,
		title: 'Доставка по Узбекистану',
		description: 'Быстрая и надежная доставка по всей стране.',
	},
	{
		icon: ShieldCheck,
		title: 'Денежная гарантия',
		description: 'Обмен и возврат в течение 3 дней.',
	},
	{
		icon: Headphones,
		title: 'Онлайн поддержка',
		description: '24/7 доступ к нашему контактному центру.',
	},
	{
		icon: CreditCard,
		title: 'Гибкий платёж',
		description: 'Оплата разными кредитными картами.',
	},
]
export const lngs = [
	{ route: 'ru', label: 'Русский' },
	{ route: 'uz', label: "O'zbekcha" },
]

export const selectCategories = [
	{ label: 'all', name: 'All' },
	{ label: 'discounts', name: 'Discounts' },
	{ label: 'proteins', name: 'Proteins' },
	{ label: 'gainers', name: 'Gainers' },
	{ label: 'creatines', name: 'Creatines' },
	{ label: 'bccas', name: 'Bccas' },
	{ label: 'vitamins', name: 'Vitamins' },
	{ label: 'omega-3', name: 'Omega 3' },
	{ label: 'for-babys', name: 'For Babys' },
	{ label: 'for-womens', name: 'For Womens' },
]
export const filyallar = [
	{ label: 'Fargona filial', name: 'fargona' },
	{ label: 'Andijon filial', name: 'andijon' },
	{ label: 'Toshkent filial', name: 'toshkent' },
	{ label: 'Namangan filial', name: 'namangan' },
	{ label: 'Samarqand filial', name: 'samarqand' },
]
export const filyallarChet = [
	{ label: 'Qazagiston filial', name: 'qazagiston' },
	{ label: 'Tojigiston filial', name: 'tojigiston' },
]

// locations
export const mapData: Record<string, string> = {
	toshkent:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.245166738438!2d71.4254531764457!3d51.122385671728274!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42458578eae5c671%3A0x94cdc6a51e38e504!2sBody-pit-life!5e0!3m2!1sru!2s!4v1757401791735!5m2!1sru!2s',
	fargona:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.2792505263956!2d69.29141947587766!3d41.36801727130233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3b33d4c6a67%3A0x4ea83952e9d353b1!2sBODY_PIT_UZ!5e0!3m2!1sru!2s!4v1757401717316!5m2!1sru!2s',
	tojigiston:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.2792505263956!2d69.29141947587766!3d41.36801727130233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3b33d4c6a67%3A0x4ea83952e9d353b1!2sBODY_PIT_UZ!5e0!3m2!1sru!2s!4v1757401717316!5m2!1sru!2s',
	namangan:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d767092.5669795347!2d68.06182157812499!3d41.32071100000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b315c6e82d5%3A0xeac27dbdf823ea13!2sSportshopintashkent!5e0!3m2!1sru!2s!4v1757400558792!5m2!1sru!2s',
	andijon:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193441.15829689446!2d72.04126599453124!3d40.75062819999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38bcedd6940f4665%3A0xe1b7a5cabf4e9979!2sOlimp-nutrition!5e0!3m2!1sru!2s!4v1757400641391!5m2!1sru!2s',
	samarqand:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786348.1154949096!2d66.24171440242124!3d39.65708838812287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19fbd26391b5%3A0xfde06b6db8ae74ec!2zUFJPIFNQT1JUINC80LDQs9Cw0LfQuNC9INGB0L_QvtGA0YLRgtC-0LLQsNGA0L7Qsg!5e0!3m2!1sru!2s!4v1757400748959!5m2!1sru!2s',
	qazagiston:
		'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d786348.1154949096!2d66.24171440242124!3d39.65708838812287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19fbd26391b5%3A0xfde06b6db8ae74ec!2zUFJPIFNQT1JUINC80LDQs9Cw0LfQuNC9INGB0L_QvtGA0YLRgtC-0LLQsNGA0L7Qsg!5e0!3m2!1sru!2s!4v1757400748959!5m2!1sru!2s',
}

export const instructorNavLinks = [
	{
		label: 'Dashboard',
		route: '/admin',
		icon: GaugeCircle,
	},
	{
		label: 'My Products',
		route: '/admin/my-products',
		icon: MonitorPlay,
	},
	{
		label: 'Create Product',
		route: '/admin/create-product',
		icon: FileCode,
	},
	{
		label: 'Reviews',
		route: '/admin/reviews',
		icon: MessageSquareMore,
	},
	{
		label: 'Settings',
		route: '/admin/settings',
		icon: Settings2,
	},
]
