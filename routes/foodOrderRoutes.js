// const express = require('express');
import express from "express";

// const { createOrder, getOrdersByUser } = require('../controllers/orderController');
// const protect = require('../middleware/authMiddleware');
import { adminCheck, userCheck } from '../middlewares/authCheck.js';
import { addFoodOrder, getAllFoodOrder, getFoodOrderDetail, getFoodOrderUser } from "../controllers/footOrderController.js";

const router = express.Router();

router.route('/').get(userCheck, adminCheck, getAllFoodOrder).post(userCheck, addFoodOrder);

// router.route('/users').get(userCheck, getFoodOrderUser)

// router.route('/users/:id').get(userCheck, getFoodOrderDetail);

export default router;

