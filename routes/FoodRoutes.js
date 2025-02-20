// const express = require('express');
import express from 'express';
// import mongoose from 'mongoose';
// const { getAllFoods, addFood } = require('../controllers/foodController');
import { getAllFoods, addFoods, removeFood, updateFood, getFood } from '../controllers/foodController.js';
// const protect = require('../middleware/authMiddleware');
import { adminCheck, userCheck } from '../middlewares/authCheck.js';
import { fileCheck, updateFileCheck } from '../middlewares/fileCheck.js';
const router = express.Router();

router.route('/').get(getAllFoods).post(userCheck, adminCheck, fileCheck, addFoods);

// router.get('/', getAllFoods);
// router.post('/', protect, addFood); // Protected route
router.route('/:id').get(getFood).patch(userCheck, adminCheck, updateFileCheck, updateFood).delete(removeFood);

export default router;
