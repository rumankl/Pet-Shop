// const express = require('express');
import express from "express";

// const { createOrder, getOrdersByUser } = require('../controllers/orderController');
import { createOrder, getOrdersByUser } from '../controllers/footOrderController.js';

// const protect = require('../middleware/authMiddleware');
import { adminCheck, userCheck } from '../middlewares/authCheck.js';

const router = express.Router();

// router.post('/', protect, createOrder);
// router.get('/:userId', protect, getOrdersByUser);
router.route('/').post(userCheck, adminCheck, createOrder).get(userCheck, getOrdersByUser);

export default router;
