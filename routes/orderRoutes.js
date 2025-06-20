import express from 'express';
import { getAllOrder, addOrder, getOrderUser, getOrderDetail } from '../controllers/orderController.js';
import { adminCheck, userCheck } from '../middlewares/authCheck.js';


const router = express.Router();

router.route('/').get(userCheck, adminCheck, getAllOrder).post(userCheck, addOrder);

router.route('/users').get(userCheck, getOrderUser)

router.route('/users/:id').get(userCheck, getOrderDetail);
export default router;