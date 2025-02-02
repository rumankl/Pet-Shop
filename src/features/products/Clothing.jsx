import React from 'react'
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
const Clothing = () => {
  return (
    <div>
      <Card className="mt-6 w-96">
        <CardHeader color="gray" className="relative h-60">
          <img
            src="https://m.media-amazon.com/images/I/71VCjqYjK6L._AC_SL1500_.jpg"
            alt="card-image"
          />
        </CardHeader>
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            Red Hoodie
          </Typography>

          <Typography>
            $50
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button>ADD TO CART</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Clothing
