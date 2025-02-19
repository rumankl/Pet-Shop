// const Food = require('../models/Food');
import Food from "../models/Food.js";

export const getAllFoods = async (req, res) => {
  try {
    const foods = await Food.find();
    res.json(foods);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// export const addFoods = async (req, res) => {
//   try {
//     const food = await Food.create(req.body);
//     res.status(201).json(food);
//   } catch (err) {
//     res.status(400).json({ message: err.message });

//   }
// };


export const addFoods = async (req, res) => {
  const {
    name,
    description,
    price } = req.body;

  try {
    await Food.create({
      name,
      description,
      image: req.image,
      price: Number(price),
    });
    return res.status(200).json({ message: 'success' });
  } catch (err) {
    console.log(err);
    fs.unlinkSync(`./uploads/${req.image}`);
    return res.status(400).json({ message: `${err}` });
  }
}

