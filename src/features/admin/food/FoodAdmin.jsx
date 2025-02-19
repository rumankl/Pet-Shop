import { Button } from '@material-tailwind/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const FoodAdmin = () => {
  const nav = useNavigate();
  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Welcome To Foods</h1>
        <Button onClick={() => nav('/food-form')} className="py-2 px-4" color="deep-purple" size="lg">Add Food</Button>
      </div>
    </div>
  )
}

export default FoodAdmin
