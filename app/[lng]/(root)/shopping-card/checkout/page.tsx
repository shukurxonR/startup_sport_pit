import TopBar from '@/components/shared/top-bar'
import CheckoutElement from './_components/checkout-element'

function Page() {
	return (
		<div>
			<TopBar
				label={'To`lov qilish'}
				extra={'Savatingizdagi mahsulotlarni sotib olish'}
			/>
			<CheckoutElement />
		</div>
	)
}

export default Page
