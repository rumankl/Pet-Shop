import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { Button, Card, Option, Select, Typography } from '@material-tailwind/react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
// import ProductReview from './ProductReview';
// import { user } from '../../dummy/user';
// import { useGetProductByIdQuery } from './productApi';
import { base } from '../../data/apis';
// import { setCarts } from '../cart/cartSlice';
import { useGetFoodByIdQuery } from './foodApi';
import { setFoodCarts } from '../../foodcart/foodcartSlice';



const FoodDetail = () => {
  const { id } = useParams();
  const { data: food, isLoading, isError, error } = useGetFoodByIdQuery(id);

  if (isLoading) {
    return <h1>Loading....</h1>
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }



  return (
    <>
      <div className='grid grid-cols-3 p-4 items-center gap-10'>

        <div className="image">
          <img className='w-full' src={`${base}/${food.image}`} alt="" />
        </div>
        <div className="info space-y-3">
          <h1>{food.name}</h1>
          <p>{food.description}</p>
          <p>Rs.{food.price}</p>
        </div>

        {food && <AddCart food={food} />}




      </div>
      {/* <ProductReview user={user} id={product._id} reviews={product.reviews} /> */}
    </>
  )
}

export default FoodDetail








export const AddCart = ({ food }) => {
  const dispatch = useDispatch();
  const nav = useNavigate();
  const { foodcarts } = useSelector((state) => state.foodcartSlice);
  const { user } = useSelector((state) => state.userSlice);
  const isExist = foodcarts.find((foodcart) => foodcart.food === food._id);

  const formik = useFormik({
    initialValues: {
      qty: isExist?.qty || 1,
      qty: 1
    }
  });




  const handleSubmit = () => {
    dispatch(setFoodCarts({
      name: food.name,
      qty: Number(formik.values.qty),
      image: food.image,
      price: food.price,
      food: food._id, //this id main for array[] 
      stock: food.stock
    }));
    nav('/foodcart-page');
  }

  return (
    <Card className="h-[200px] w-full">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>

            <th
              className="border-b border-red-100 bg-red-50 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Food Name
              </Typography>
            </th>
            <th

              className="border-b border-red-100 bg-red-50 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                {food.name}
              </Typography>
            </th>

          </tr>

          <tr>

            <th

              className="border-b border-red-100 bg-red-50 p-4"
            >
              <Typography
                variant="small"
                color="blue-gray"
                className="font-normal leading-none opacity-70"
              >
                Qty
              </Typography>
            </th>
            <th

              className="border-b border-red-100 bg-red-50 p-4"
            >
              <div>

                <select
                  defaultValue={formik.values.qty}
                  name="qty" id="" className='p-2'

                  onChange={(e) => formik.setFieldValue('qty', e.target.value)}
                >
                  {[...Array(food.stock).keys()].map((c) => {
                    return <option key={c + 1} value={c + 1}>{c + 1}</option>
                  })}
                </select>
              </div>
            </th>

          </tr>

        </thead>



      </table>
      <div className='flex justify-center pt-7 '>
        <Button disabled={user?.isAdmin || !user} onClick={handleSubmit} className='bg-red-500'>Add To Cart</Button>
      </div>
    </Card>
  )
}





