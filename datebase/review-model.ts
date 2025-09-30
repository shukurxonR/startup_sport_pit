import { model, models, Schema } from 'mongoose'

const ReviewSchema = new Schema(
	{
		data: String,
		rating: Number,
		user: { type: Schema.Types.ObjectId, ref: 'User' },
		product: { type: Schema.Types.ObjectId, ref: 'Product' },
		isFlag: { type: Boolean, default: false },
	},
	{
		timestamps: true,
	}
)
const Review = models?.Review || model('Review', ReviewSchema)
export default Review
