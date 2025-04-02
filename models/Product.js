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
    enum: ['Fur Seasons', 'Paw Couture', 'Haute Hounds', 'Tail Trends', 'Cozy Critters', 'The Stylish Snout', 'Whisker Wardrobe', 'Fur-tastic Fashions', 'Cuddly Couture'],
    required: true
  },
  brand: {
    type: String,
    enum: ['Luxury Pet Clothing', 'Casual and Everyday Wear', 'Seasonal and Holiday Themes'],
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