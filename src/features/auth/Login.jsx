import {
  Card,
  Input,

  Button,
  Typography,
} from "@material-tailwind/react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useUserLoginMutation } from "./authApi";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { userAdd } from "./userSlice";



const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [userLogin, { isLoading }] = useUserLoginMutation();

  const { handleChange, handleSubmit, values, errors, setFieldValue, touched } = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async (val) => {

      try {
        const response = await userLogin(val).unwrap();
        dispatch(userAdd(response));
        toast.success(response?.message);
        // nav(-1);
      } catch (err) {
        // console.log(err);
        toast.error(err.data?.message);
      }



    }
  });


  return (
    <Card color="transparent" shadow={false} className="p-4 mx-auto max-w-[350px]">
      <Typography variant="h4" color="blue-gray">
        Log in
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to log ins.
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
        <div className="space-y-6">

          <div>
            <Input
              name="email"
              onChange={handleChange}
              value={values.email}
              label="Email" />
          </div>
          <div>
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              label="Password" />
          </div>
        </div>




        <Button type="submit" loading={isLoading} className="mt-6" fullWidth>
          Login
        </Button>
      </form>
      <Typography color="gray" className="mt-4 text-center font-normal">
        Don't have an account?{" "}
        <button onClick={() => nav('/signup')} className="font-medium text-gray-900">
          Sign Up
        </button>
      </Typography>
    </Card>
  );
}


export default Login 