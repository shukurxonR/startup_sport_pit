import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
	{
		fullName: { type: String },
		clerkId: { type: String },
		email: { type: String },
		picture: { type: String },
		favouriteProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
	},
	{ timestamps: true }
)

const User = models?.User || model('User', UserSchema)
export default User
