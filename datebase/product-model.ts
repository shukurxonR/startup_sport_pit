import { model, models, Schema } from 'mongoose'

const productSchema = new Schema(
	{
		name: String,
		category: String,
		description: String,
		brand: String,
		price: Number,
		top: { type: Boolean, default: false },
		discount: { type: Boolean, default: false },
		percent: { type: Number, default: 0 },
		images: { type: [String], default: [] },
		published: { type: Boolean, default: true },
		instructor: { type: Schema.Types.ObjectId, ref: 'User' },
	},
	{ timestamps: true } // ✅ createdAt, updatedAt avtomatik bo‘ladi
)

const Product = models?.Product || model('Product', productSchema)

export default Product
