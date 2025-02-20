import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Typography, Button } from "@material-tailwind/react";
import CardLoading from "../../ui/CardLoading";
import { base } from '../../data/apis';
import { useGetProductsQuery } from './productApi';
import { useNavigate } from 'react-router-dom';

const AllProducts = () => {
  const nav = useNavigate();
  const { isLoading, isError, error, data } = useGetProductsQuery();
  // console.log(data)
  return (
    <div>
      {isLoading ? <CardLoading /> :
        <div className="grid grid-cols-3 gap-4">

          {data && data.products.map((product) => {
            return <Card className="" key={product._id}>
              <CardHeader shadow={false} floated={false} className="h-56">
                <img
                  src={`${base}/${product.image} `}
                  alt="card-image"
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody>
                <div className="mb-2 flex items-center justify-between">
                  <Typography color="blue-gray" className="font-medium">
                    {product.title}
                  </Typography>
                  <Typography color="blue-gray" className="font-medium">
                    ${product.price}
                  </Typography>
                </div>
                <Typography
                  variant="small"
                  color="gray"
                  className="font-normal opacity-75"
                >
                  {product.description}
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Button
                  onClick={() => nav(`/product-detail/${product._id}`)}
                  ripple={false}
                  fullWidth={true}
                  className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                >
                  View More
                </Button>
              </CardFooter>
            </Card>
          })}

        </div>}
    </div>
  )
}

export default AllProducts
