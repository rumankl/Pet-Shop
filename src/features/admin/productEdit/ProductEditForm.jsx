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
import { base } from "../../../data/apis";
import { useUpdateProductMutation } from "../../products/productApi";





const ProductEditForm = ({ product }) => {
  const [updateProduct, { isLoading }] = useUpdateProductMutation();
  console.log(product);
  // const { user } = useSelector((state) => state.userSlice);
  // const { user } = useSelector((state) => state.userSlice);
  const nav = useNavigate();

  const productSchema = Yup.object({
    title: Yup.string().required(),
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
        title: product?.title,
        description: product?.description,
        price: product?.price,
        stock: product?.stock,
        brand: product?.brand,
        category: product?.category,
        image: null,
        imageReview: product?.image

      },

      onSubmit: async (val, { resetForm }) => {
        const formData = new FormData();
        formData.append('title', val.title);
        formData.append('description', val.description);
        formData.append('price', val.price);
        formData.append('stock', val.stock);
        formData.append('brand', val.brand);
        formData.append('category', val.category);

        try {
          if (val.image) {
            formData.append('image', val.image);
            const response = await updateProduct({
              id: product._id,
              body: formData,
              // token: user.token 
              // token: user.token we dont needwhile using cookies
            }).unwrap();
            toast.success(response?.message);
            nav(-1);

          } else {
            const response = await updateProduct({
              id: product._id,
              body: formData,
              // token: user.token 
              // token: user.token we dont needwhile using cookies
            }).unwrap();
            toast.success(response?.message);
            nav(-1);

          }
        } catch (err) {

        }


      },
      // validationSchema: productSchema

    });


  return (
    <Card color="transparent" shadow={false} className="max-w-sm  mx-auto mt-4 mb-4">
      <Typography variant="h4" color="blue-gray">
        Edit Product
      </Typography>

      <form onSubmit={handleSubmit} className="mt-2">
        <div className="mb-1 flex flex-col gap-3 space-y-2">

          <Input
            size="lg"
            placeholder="product_name"
            label="product_name"
            name="title"
            value={values.title}
            onChange={handleChange}
          />
          {errors.title && touched.title && <h1 className='text-pink-700'>{errors.title}</h1>}

          <Input
            size="lg"
            placeholder="price"
            label="price"
            name="price"
            value={values.price}
            onChange={handleChange}
          />
          {errors.price && touched.price && <h1 className='text-pink-700'>{errors.price}</h1>}
          <Input
            size="lg"
            placeholder="countInStock"
            label="countInStock"
            value={values.stock}
            onChange={handleChange}
            name="stock"
          />
          {errors.stock && touched.stock && <h1 className='text-pink-700'>{errors.stock}</h1>}
          <Select value={values.brand} onChange={(e) => setFieldValue('brand', e)} label="Select Brand">
            <Option value="Luxury Pet Clothing">Luxury Pet Clothing</Option>
            <Option value="Casual and Everyday Wear">Casual and Everyday Wear</Option>
            <Option value="Seasonal and Holiday Themes">Seasonal and Holiday Themes</Option>
          </Select>
          <Select value={values.category} onChange={(e) => setFieldValue('category', e)} label="Select Category">


            <Option value="Fur Seasons">Fur Seasons</Option>
            <Option value="Paw Couture">Paw Couture</Option>
            <Option value="Haute Hounds">Haute Hounds</Option>
            <Option value="Tail Trends">Tail Trends</Option>
            <Option value="Cozy Critters">Cozy Critters</Option>

            <Option value="The Stylish Snout">The Stylish Snout</Option>
            <Option value="Whisker Wardrobe">Whisker Wardrobe</Option>
            <Option value="Fur-tastic Fashions">Fur-tastic Fashions</Option>
            <Option value=" Cuddly Couture">Cuddly Couture</Option>

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
export default ProductEditForm