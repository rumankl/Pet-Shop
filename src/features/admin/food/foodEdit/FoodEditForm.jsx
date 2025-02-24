import {
  Card,
  Input,
  Button,
  Typography,
  Textarea,
  Option,
  Select,
} from "@material-tailwind/react";
import { useFormik } from 'formik';
import { useNavigate } from 'react-router';
import * as Yup from 'yup';
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { base } from "../../../../data/apis";
import { useUpdateFoodMutation } from "../../../food/foodApi";

const FoodEditForm = ({ food }) => {
  const [updateFood, { isLoading }] = useUpdateFoodMutation();
  console.log(food);

  // const { user } = useSelector((state) => state.userSlice);
  const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();

  const foodSchema = Yup.object({
    name: Yup.string().required(),
    description: Yup.string().required(),
    price: Yup.number().required(),
    stock: Yup.number().required(),
    brand: Yup.string().required(),
    category: Yup.string().required(),
    // product_image: Yup.mixed().required().test('fileType', 'invalid image', (e) => {
    //   return ['image/jpg', 'image/png', 'image/jpeg'].includes(e.type);
    // })
  });

  const { values, handleChange,
    handleSubmit, errors, setFieldValue, touched } = useFormik({

      initialValues: {
        name: food?.name,
        description: food?.description,
        price: food?.price,
        stock: food?.stock,
        category: food?.category,
        image: null,
        imageReview: food?.image

      },

      onSubmit: async (val, { resetForm }) => {
        const formData = new FormData();
        formData.append('name', val.name);
        formData.append('description', val.description);
        formData.append('price', val.price);
        formData.append('stock', val.stock);
        formData.append('category', val.category);

        try {
          if (val.image) {
            formData.append('image', val.image);
            const response = await updateFood({
              id: food._id,
              body: formData,
              // token: user.token 
              token: user.token
            }).unwrap();
            toast.success(response?.message);
            nav(-1);

          } else {
            const response = await updateFood({
              id: food._id,
              body: formData,
              // token: user.token 
              token: user.token
            }).unwrap();
            toast.success(response?.message);
            nav(-1);

          }
        } catch (err) {

        }


      },
      //validationSchema: foodSchema

    });


  return (
    <Card color="transparent" shadow={false} className="max-w-sm  mx-auto mt-4 mb-4">
      <Typography variant="h4" color="blue-gray">
        Edit Food
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">

          <Input
            size="lg"
            placeholder="product_name"
            label="product_name"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
          {errors.name && touched.name && <h1 className='text-pink-700'>{errors.name}</h1>}

          <Input
            size="lg"
            placeholder="price"
            label="price"
            name="price"
            value={values.price}
            onChange={handleChange}
          />
          {errors.price && touched.price && <h1 className='text-pink-700'>{errors.price}</h1>}

          <Select value={values.category} onChange={(e) => setFieldValue('category', e)} label="Select Category">
            <Option value="Dog">Dog</Option>
            <Option value="Cat">Cat</Option>
            <Option value="Bird">Bird</Option>
            <Option value="Fish">Fish</Option>
          </Select>

          <Textarea
            size="lg"
            placeholder="product_detail"
            label="product_detail"
            name="description"
            value={values.description}
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

            {values.imageReview && <img src={values.image === null ? `${base}/${values.imageReview}` : values.imageReview} alt="" />}
          </div>


        </div>

        <Button loading={isLoading} type="submit" className="mt-6" fullWidth>
          Submit
        </Button>

      </form>
    </Card>
  )
}
export default FoodEditForm