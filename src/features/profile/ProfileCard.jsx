import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { useFormik } from "formik";
import { useUpdateUserProfileMutation } from "../auth/authApi";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const ProfileCard = ({ userData }) => {

  const { user } = useSelector((state) => state.userSlice);

  const [updateUser, { isLoading }] = useUpdateUserProfileMutation();

  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fullname: userData?.fullname,
      email: userData?.email
    },
    onSubmit: async (val) => {
      try {
        await updateUser({
          body: val,
          token: user.token
        }).unwrap();
        toast.success('success');
      } catch (err) {
        toast.error(`${err.data?.message}`);
      }
    }
  });

  return (
    <div className="">


      <Card color="transparent" shadow={false}>
        <Typography color="gray" className="mt-1 font-normal">
          Update Profile
        </Typography>
        <form onSubmit={handleSubmit} className="mt-8 mb-2 w-full">
          <div className="mb-1 flex flex-col gap-6">
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Name
            </Typography>
            <Input
              size="lg"
              name='fullname'
              value={values.fullname}
              onChange={handleChange}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"

            />
            <Typography variant="h6" color="blue-gray" className="-mb-3">
              Your Email
            </Typography>
            <Input
              size="lg"
              name='email'
              onChange={handleChange}
              value={values.email}
              placeholder="name@mail.com"
              className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
              labelProps={{
                className: "before:content-none after:content-none",
              }}
            />

          </div>

          <Button loading={isLoading} type='submit' className="mt-6" fullWidth>
            Update
          </Button>

        </form>
      </Card>






    </div>
  )
}
export default ProfileCard