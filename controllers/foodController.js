// const Food = require('../models/Food');
import Food from "../models/Food.js";
import fs from 'fs';
import mongoose from "mongoose";
// export const getAllFoods = async (req, res) => {
//   try {
//     const food = await Food.find();
//     res.json(food);
//   } catch (err) {
//     res.status(500).json({ message: err.message });
//   }
// };

// export const addFoods = async (req, res) => {
//   try {
//     const food = await Food.create(req.body);
//     res.status(201).json(food);
//   } catch (err) {
//     res.status(400).json({ message: err.message });

//   }
// };

///this id for All items or product
export const getAllFoods = async (req, res) => {
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
    let query = Food.find(JSON.parse(queryStr));

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
    const foods = await query;

    // Return the response
    return res.status(200).json({
      length: foods.length,
      foods,
    });
  } catch (err) {
    // Return error response
    return res.status(400).json({ error: err.message });
  }
};

///this for id indivisual
export const getFood = async (req, res) => {
  const { id } = req.params;
  try {

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'food not found' });
    const food = await Food.findById(id);
    return res.status(200).json(food);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}

//this is for create or adding itemsor products
export const addFoods = async (req, res) => {
  const {
    name,
    description,
    price, category } = req.body;

  try {
    await Food.create({
      name,
      description,
      image: req.image,
      category,
      price: Number(price),
    });
    return res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    fs.unlinkSync(`./uploads/${req.image}`);
    return res.status(400).json({ message: `${err}` });
  }
}

//this is for update products or items
export const updateFood = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    description,
    category,
    price, } = req.body;

  try {

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'invalid id' });

    const isExist = await Food.findById(id);
    if (!isExist) return res.status(404).json({ message: 'Food not found' });

    if (req.newImage) {

      fs.unlinkSync(`./uploads/${isExist.image}`);
      await Food.findByIdAndUpdate(
        id,
        {
          name: name || isExist.name,
          description: description || isExist.description,
          image: req.newImage,
          category: category || isExist.category,
          price: Number(price) || isExist.price,
        });

    } else {
      await Food.findByIdAndUpdate(id,
        {
          name: name || isExist.name,
          description: description || isExist.description,
          category: category || isExist.category,
          price: Number(price) || isExist.price,

        });

    }

    return res.status(200).json({ message: 'success' });

  } catch (err) {
    console.log(err);
    fs.unlinkSync(`./uploads/${req.image}`);
    return res.status(400).json({ message: `${err}` });
  }
}
//this is for clear items or products 
export const removeFood = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: 'invalid id' });

    const isExist = await Food.findById(id);
    if (!isExist) return res.status(404).json({ message: 'Food not found' });

    await Food.findByIdAndDelete(id);
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