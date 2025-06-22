import mongoose from "mongoose";


const FoodorderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User'
  },
  foodtotalAmount: {
    type: Number,
    required: true,
  },

  foodorderItems: [
    {
      name: { type: String, required: true },
      qty: { type: Number, required: true },
      image: { type: String, required: true },
      price: { type: Number, required: true },
      food: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Food'
      },
    }
  ]


}, { timestamps: true });


const FoodOrder = mongoose.model('FoodOrder', FoodorderSchema);

export default FoodOrder;