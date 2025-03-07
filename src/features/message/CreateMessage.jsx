
import {
  Card,
  Input,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useCreateMessageMutation } from "./messageApi";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must not exceed 50 characters")
    .required("Name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must not exceed 100 characters")
    .required("Email is required"),

  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters")
    .required("Description is required"),
});

const CreateMessage = () => {
  const nav = useNavigate();

  const [createMessage, { isLoading }] = useCreateMessageMutation();

  const { handleChange, handleSubmit, values, errors, touched } = useFormik({
    initialValues: {
      email: '',
      name: '',
      description: '',
    },
    validationSchema,
    onSubmit: async (val) => {
      try {

        const response = await createMessage(val).unwrap();
        toast.success(response?.message);
        nav(-1);
      } catch (err) {
        toast.error(err?.data?.message || "An error occurred.");
      }
    },
  });

  return (
    <Card color="transparent" shadow={false} className="p-4 mx-auto max-w-[350px] mr-6">
      <Typography variant="h4" color="blue-gray">
        Create Message
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your message details below.
      </Typography>

      <form onSubmit={handleSubmit} className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96 ">
        <div className="space-y-6">
          {/* Name Input */}
          <div>
            <Input
              name="name"
              onChange={handleChange}
              value={values.name}
              label="Name"
              error={touched.name && errors.name}
            />
            {touched.name && errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}
          </div>

          {/* Email Input */}
          <div>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              label="Email"
              error={touched.email && errors.email}
            />
            {touched.email && errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Description Input */}
          <div>
            <Input
              name="description"
              onChange={handleChange}
              value={values.description}
              label="Description"
              error={touched.description && errors.description}
            />
            {touched.description && errors.description && (
              <p className="text-red-500 text-sm">{errors.description}</p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <Button type="submit" loading={isLoading} className="mt-6" fullWidth>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default CreateMessage;
