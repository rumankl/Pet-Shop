
// import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

// import { removeCart, setCarts } from './cartSlice';

import { Button } from '@material-tailwind/react';
import { removeFoodCart, setFoodCarts } from './foodcartSlice';
import { base } from '../data/apis';
import { DisplayDialog } from '../UI/DisplayDialog';

// import { ShowDialogg } from '../../ui/ShowDialogg';


const FoodCartPage = () => {


  const { foodcarts } = useSelector((state) => state.foodcartSlice);

  const dispatch = useDispatch();
  // const total = foodcarts.reduce((a, b) => a + b.qty * b.price, 0);
  const total = foodcarts.reduce((a, b) => a + b.qty * b.price, 0);


  return (
    <div className='p-5'>
      {foodcarts.length === 0 ? <h1>list is empty add some</h1> :
        <div>

          <div >
            {foodcarts.map((foodcart, i) => {
              return <div className='grid grid-cols-4 gap-12 space-y-5' key={foodcart.food}>
                <img className='w-full h-36 mb-3' src={`${base}/${foodcart.image}`} alt="" />
                <div>
                  <select defaultValue={foodcart.qty} name="qty" id="" onChange={(e) => {
                    dispatch(setFoodCarts({
                      ...foodcart,
                      qty: Number(e.target.value)
                    }));
                  }}>
                    {[...Array(foodcart.stock).keys()].map((c) => {
                      return <option key={c + 1} value={c + 1}>{c + 1}</option>
                    })}
                  </select>
                </div>

                <h1>Rs.{foodcart.price}</h1>

                <div>

                  <Button onClick={() => dispatch(removeFoodCart(i))} size='sm' >Remove</Button>
                </div>

              </div>
            })}

          </div>


          <div className='flex justify-between'>
            <h1>Total</h1>
            <p>{total}</p>
          </div>


          <DisplayDialog foodtotalAmount={total} orderItems={foodcarts} />
        </div>}

    </div>
  )
}

export default FoodCartPage