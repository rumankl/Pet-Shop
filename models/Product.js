import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Clothes', 'Tech'],
    required: true
  },
  brand: {
    type: String,
    enum: ['Apple', 'Tesla', 'Gucci'],
    required: true
  },
  rating: {
    type: Number,
    default: 0
  },
  stock: {
    type: Number,
    required: true
  }

}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);


export default Product;