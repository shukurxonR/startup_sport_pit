import { model, models, Schema } from 'mongoose'

const PurchaseSchema = new Schema({
	user: { type: Schema.Types.ObjectId, ref: 'User' },
	product: { type: Schema.Types.ObjectId, ref: 'Product' },
})

const Purchase = models.Purchase || model('Purchase', PurchaseSchema)
export default Purchase
