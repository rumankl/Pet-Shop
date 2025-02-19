import React from 'react'
import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Option,
  Select,
  rating,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useAddFoodsMutation } from '../../food/foodApi';


const FoodForm = () => {
  const [addFoods, { isLoading }] = useAddFoodsMutation();
  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();
  const FoodSchema = Yup.object({
    name: Yup.string().required("Food name is required"),
    description: Yup.string().required("Food description is required"),
    price: Yup.number()
      .typeError("Price must be a number")
      .required("Food price is required"),
    image: Yup.mixed().required("Image is required").test('fileType', 'invalid image', (e) => {
      return ['image/jpg', 'image/png', 'image/jpeg'].includes(e.type);
      //image: Yup.mixed()
      // .required("Food image is required")
      // .test('fileType', 'Only JPG, JPEG, and PNG are allowed', (file) =>
      //   file ? ['image/jpg', 'image/jpeg', 'image/png'].includes(file.type) : false
      // ) 
      ////////////////OR---//////////////////


    })
  });
  const {
    values, handleChange,
    handleSubmit, errors, setFieldValue, touched
  } = useFormik({

    initialValues: {
      name: '',
      description: '',
      price: '',
      // stock: '',
      // brand: '',
      // category: '',
      image: null,
      imageReview: ''

    },

    onSubmit: async (val, { resetForm }) => {
      const formData = new FormData();
      formData.append('name', val.name);
      formData.append('description', val.description);
      formData.append('price', val.price);
      // formData.append('stock', val.stock);
      // formData.append('brand', val.brand);
      // formData.append('category', val.category);
      formData.append('image', val.image);
      try {
        await addFoods({
          body: formData,
          token: user.token
        }).unwrap();
        toast.success('add success');
        nav(-1);
      } catch (err) {
        console.log(err);
        toast.error(err.data?.message);
      }

    },

    validationSchema: FoodSchema
  });
  return (
    <div>
      <Card color="transparent" shadow={false} className="max-w-sm  mx-auto mt-4 mb-4">
        <Typography variant="h4" color="blue-gray">
          Add Food
        </Typography>

        <form onSubmit={handleSubmit} className="mt-2">
          <div className="mb-1 flex flex-col gap-3 space-y-2">

            <Input
              size="lg"
              placeholder="product_name"
              label="product_name"
              name="name"
              onChange={handleChange}
            />
            {errors.name && touched.name && <h1 className='text-pink-700'>{errors.name}</h1>}

            <Input
              size="lg"
              placeholder="product_price"
              label="product_price"
              name="price"
              onChange={handleChange}
            />
            {errors.price && touched.price && <h1 className='text-pink-700'>{errors.price}</h1>}

            {/* <Input
            size="lg"
            placeholder="countInStock"
            label="countInStock"
            onChange={handleChange}
            name="stock"
          />
          {errors.stock && touched.stock && <h1 className='text-pink-700'>{errors.stock}</h1>}
          <Select onChange={(e) => setFieldValue('brand', e)} label="Select Brand">

            <Option value="Apple">Apple</Option>
            <Option value="Tesla">Tesla</Option>
            <Option value="Gucci">Gucci</Option>

          </Select>
          <Select onChange={(e) => setFieldValue('category', e)} label="Select Category">
            <Option value="Clothes">Clothes</Option>
            <Option value="Tech">Tech</Option>
          </Select> */}

            <Textarea
              size="lg"
              placeholder="product_detail"
              label="product_detail"
              name="description"
              onChange={handleChange}
            />


            <div className='space-y-2'>
              <h1>Select An Image</h1>

              <Input
                label="Image File"
                onChange={(e) => {
                  const file = e.target.files[0];
                  setFieldValue('imageReview', URL.createObjectURL(file))
                  setFieldValue('image', file);
                }}
                type='file'
                name='image'
                multiple
                accept='image/*'
              />
              {errors.image && touched.image && <h1 className='text-pink-700'>{errors.image}</h1>}
              {values.imageReview && <img src={values.imageReview} alt="" />}
            </div>


          </div>

          <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
            Submit
          </Button>

        </form>
      </Card>
    </div >
  )
}

export default FoodForm

