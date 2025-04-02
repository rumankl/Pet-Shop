import {
  Card,
  Button,
  Typography,
  Rating,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { useGetProductByIdQuery, useRatingProductMutation, } from "../products/productApi";
import { useNavigate, useParams } from "react-router"

const CartRating = () => {
  const [ratingProduct, { isLoading }] = useRatingProductMutation();
  const { id } = useParams();
  const { data: product, isError, error } = useGetProductByIdQuery(id);
  console.log(product)
  const nav = useNavigate();

  // const { data } = useGetProductByIdQuery(id);
  const { user } = useSelector((state) => state.userSlice);

  const productSchema = Yup.object({
    rating: Yup.number().min(1).max(5).required(), // Rating validation
  });

  const { values, handleChange, handleSubmit, errors, setFieldValue, touched } = useFormik({
    initialValues: {
      rating: product?.rating || 0, // Initial rating value (from product)
    },

    onSubmit: async (val) => {
      // Check if product._id exists before submitting the form
      if (!product?._id) {
        toast.error("Product ID is missing.");
        return;
      }

      const formData = new FormData();
      formData.append('rating', val.rating); // Append rating to form data

      try {
        const response = await ratingProduct({
          id: product._id,  // Pass product._id here
          body: formData,
          token: user.token,
        }).unwrap();
        nav('/')
        toast.success(response?.message);

      } catch (err) {
        toast.error(err.message || 'An error occurred');
      }
    },
  });

  return (
    <Card color="transparent" shadow={false} className="max-w-sm mx-auto mt-4 mb-4">
      <h1>list is empty add some</h1>
      <Typography variant="h4" color="blue-gray">
        Rate Product
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        {/* Rating Input */}
        <div className="flex flex-col mb-3">
          <label className="mb-2 text-gray-700">Rating (1 to 5)</label>
          <Rating
            value={values.rating}
            onChange={(val) => setFieldValue('rating', val)} // Update the rating in form state
          />
          {errors.rating && touched.rating && <h1 className='text-pink-700'>{errors.rating}</h1>}
        </div>

        <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
          Submit Rating
        </Button>
      </form>
    </Card>
  );
};

export default CartRating;
