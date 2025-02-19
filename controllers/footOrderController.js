// const Order = require('../models/Order');
import Order from "../models/Order.js";

export const createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.params.userId }).populate('items.food');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
