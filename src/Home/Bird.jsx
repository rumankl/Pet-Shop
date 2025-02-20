import React from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardBody, CardFooter, CardHeader, Typography, Button } from "@material-tailwind/react";
import { useGetAllFoodsQuery } from "../features/food/foodApi";
import { base } from "../data/apis";

const Bird = () => {
  const navigate = useNavigate();
  const { isLoading, isError, error, data } = useGetAllFoodsQuery();

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;
  if (isError) return <p className="text-center text-red-500">Error: {error?.message || "Something went wrong!"}</p>;

  // Filter foods to show only "Bird" category
  const BirdFoods = data?.foods.filter((food) => food.category === "Bird");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {BirdFoods.length > 0 ? (
        BirdFoods.map(({ _id, name, price, description, image }) => (
          <Card key={_id} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader shadow={false} floated={false} className="h-56">
              <img src={`${base}/${image}`} alt={name} className="h-full w-full object-cover" />
            </CardHeader>
            <CardBody>
              <div className="mb-2 flex items-center justify-between">
                <Typography color="blue-gray" className="font-medium">{name}</Typography>
                <Typography color="blue-gray" className="font-medium">${price}</Typography>
              </div>
              <Typography variant="small" color="gray" className="opacity-75">{description}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                onClick={() => navigate(`/food-detail/${_id}`)}
                ripple={false}
                fullWidth
                className="bg-blue-gray-900/10 text-blue-gray-900 hover:scale-105 transition-transform duration-200"
              >
                View More
              </Button>
            </CardFooter>
          </Card>
        ))
      ) : (
        <p className="text-center text-lg col-span-full">No Bird food available.</p>
      )}
    </div>
  );
};

export default Bird;
