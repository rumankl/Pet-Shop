import Product from "../models/Product.js";
import fs from 'fs';
import mongoose from "mongoose";
// Middleware to set query parameters for top products
export const getTopProducts = (req, res, next) => {
  req.query.rating = { gt: 4.5 }; // Fetch products with ratings greater than 4.7
  req.query.limit = 5; // Limit results to 5
  next(); // Pass control to the next middleware or route handler
};

// Controller to fetch products based on query
export const getProducts = async (req, res) => {
  // console.log(req.cookies);
  try {
    // Fields to exclude from query object
    const excludeFields = ['sort', 'search', 'limit', 'fields', 'skip', 'page'];

    // Clone the request query object
    const queryObj = { ...req.query };

    // Remove excluded fields from the query object
    excludeFields.forEach((field) => delete queryObj[field]);

    // If the "search" query parameter exists, add regex-based filtering for the "title"
    if (req.query.search) {
      queryObj.title = { $regex: req.query.search, $options: 'i' };
    }

    // Convert query object to string and add MongoDB operators (e.g., $gte, $lte)
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt|eq)\b/g, (match) => `$${match}`);

    // Initialize the query with the modified query object
    let query = Product.find(JSON.parse(queryStr));

    // Handle sorting (e.g., ?sort=price,-rating)
    if (req.query.sort) {
      const sortFields = req.query.sort.split(/[\s,]+/).filter(Boolean).join(' ');
      query = query.sort(sortFields);
    }

    // Handle field selection (e.g., ?fields=title,price)
    if (req.query.fields) {
      const selectFields = req.query.fields.split(/[\s,]+/).filter(Boolean).join(' ');
      query = query.select(selectFields);
    }

    // Handle pagination
    const page = parseInt(req.query.page, 10) || 1;
    const limit = parseInt(req.query.limit, 10) || 10;
    const skip = (page - 1) * limit;

    // Apply pagination to the query
    query = query.skip(skip).limit(limit);

    // Execute the query
    const products = await query;

    // Return the response
    return res.status(200).json({
      length: products.length,
      products,
    });
  } catch (err) {
    // Return error response
    return res.status(400).json({ error: err.message });
  }
};


export const getProduct = async (req, res) => {

  const { id } = req.params;
  try {

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'product not found' });
    const product = await Product.findById(id);
    return res.status(200).json(product);
    // return res.status(200).json({ product }); {product } vayema product object ko vitra object hunxa
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}
export const createProduct = async (req, res) => {
  const {
    title,
    description,
    category, brand,
    price, stock, rating } = req.body;

  try {
    if (rating && (rating < 1 || rating > 5)) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }
    await Product.create({
      title,
      description,
      image: req.image,
      category,
      brand,
      price: Number(price),
      stock: Number(stock),
      rating: rating || 0,
    });
    return res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    fs.unlinkSync(`./uploads/${req.image}`);
    return res.status(400).json({ message: `${err}` });
  }
}


export const updateProduct = async (req, res) => {
  const { id } = req.params;
  const {
    title,
    description,
    category, brand,
    price, stock } = req.body;

  try {

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'invalid id' });

    const isExist = await Product.findById(id);
    if (!isExist) return res.status(404).json({ message: 'product not found' });

    if (req.newImage) {

      fs.unlinkSync(`./uploads/${isExist.image}`);
      await Product.findByIdAndUpdate(
        id,
        {
          title: title || isExist.title,
          description: description || isExist.description,
          image: req.newImage,
          category: category || isExist.category,
          brand: brand || isExist.brand,
          price: Number(price) || isExist.price,
          stock: Number(stock) || isExist.stock
        });

    } else {
      await Product.findByIdAndUpdate(id,
        {
          title: title || isExist.title,
          description: description || isExist.description,
          category: category || isExist.category,
          brand: brand || isExist.brand,
          price: Number(price) || isExist.price,
          stock: Number(stock) || isExist.stock
        });

    }

    return res.status(200).json({ message: 'success' });

  } catch (err) {
    console.log(err);
    fs.unlinkSync(`./uploads/${req.image}`);
    return res.status(400).json({ message: `${err}` });
  }
}
export const removeProduct = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'invalid id' });

    const isExist = await Product.findById(id);
    if (!isExist) return res.status(404).json({ message: 'product not found' });

    await Product.findByIdAndDelete(id);
    fs.unlink(`./uploads/${isExist.image}`, (err) => {
      console.log(err);
      // OR if (err) console.log(err); yo halo vaney nullss aaudaina in consolema
    });


    return res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    fs.unlinkSync(`./uploads/${req.image}`);
    return res.status(400).json({ message: `${err}` });
  }
}


// PATCH route handler for updating product rating
export const ratingProduct = async (req, res) => {
  const { id } = req.params;
  const { rating } = req.body; // Get the rating from the request body

  try {
    // Validate if the product id is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid product ID' });
    }

    // Check if the product exists
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    // Validate the rating if it's provided
    if (rating === undefined) {
      return res.status(400).json({ message: 'Rating is required' });
    }
    if (rating < 1 || rating > 5) {
      return res.status(400).json({ message: 'Rating must be between 1 and 5' });
    }

    // Update the rating
    product.rating = rating;
    await product.save(); // Save the updated product

    return res.status(200).json({ message: 'Rating updated successfully' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
};
