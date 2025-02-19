import mongoose from "mongoose";

const FoodOrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  items: [
    {
      food:
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
      },
      quantity: Number
    }],
  totalPrice: Number,
  status: { type: String, default: 'Pending' }
});

const FoodOrder = mongoose.model('FoodOrder', FoodOrderSchema);
export default FoodOrder;