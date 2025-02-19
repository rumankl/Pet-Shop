// const express = require('express');
import express from 'express';
// const { getAllFoods, addFood } = require('../controllers/foodController');
import { getAllFoods, addFoods } from '../controllers/foodController.js';
// const protect = require('../middleware/authMiddleware');
import { adminCheck, userCheck } from '../middlewares/authCheck.js';
import { fileCheck } from '../middlewares/fileCheck.js';
const router = express.Router();

router.route('/').get(getAllFoods).post(userCheck, adminCheck, fileCheck, addFoods);
// router.get('/', getAllFoods);
// router.post('/', protect, addFood); // Protected route

export default router;
