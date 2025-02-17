import Order from "../models/Order.js"

export const getAllOrder = async (req, res) => {
  try {
    const orders = await Order.find({});
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}

export const getOrderUser = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.id });
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}

export const getOrderDetail = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate([
      {
        path: 'user',
        model: 'User',
        select: 'fullname email'
      },
      {
        path: 'orderItems.product',
        model: 'Product',
        select: 'name image'

      }
    ]);
    return res.status(200).json(order);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}
export const addOrder = async (req, res) => {
  const { totalAmount, orderItems } = req.body;
  try {
    await Order.create({
      totalAmount,
      orderItems,
      user: req.id
    });
    return res.status(200).json({ message: 'successfully order created' });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}


