import FoodOrder from "../models/FoodOrder.js";
export const getAllFoodOrder = async (req, res) => {
  try {
    const foodorders = await FoodOrder.find({});
    return res.status(200).json(foodorders);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}

export const getFoodOrderUser = async (req, res) => {
  try {
    const foodorders = await FoodOrder.find({ user: req.id });
    return res.status(200).json(foodorders);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}

export const getFoodOrderDetail = async (req, res) => {
  try {
    const foodorder = await FoodOrder.findById(req.params.id).populate([
      {
        path: 'user',
        model: 'User',
        select: 'fullname email'
      },
      {
        path: 'orderItems.food',
        model: 'Food',
        select: 'name image'

      }
    ]);
    return res.status(200).json(foodorder);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}
export const addFoodOrder = async (req, res) => {
  const { totalAmount, foodorderItems } = req.body;
  try {
    await FoodOrder.create({
      totalAmount,
      foodorderItems,
      user: req.id
    });
    return res.status(200).json({ message: 'successfully order created' });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}


