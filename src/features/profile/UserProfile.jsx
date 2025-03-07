import { useSelector } from "react-redux"
import UserOrder from "../order/UserOrder";
import AdminOrder from "../order/AdminOrder";
import { useFormik } from "formik";

import { useUserProfileQuery } from "../auth/authApi";
import ProfileCard from "./ProfileCard";
import UserFoodOrder from "../foodOrder/UserFoodOrder";
import AdminFoodOrder from "../foodOrder/AdminFoodOrder";

const UserProfile = () => {
  const { user } = useSelector((state) => state.userSlice);
  const { isLoading, data, isError, error } = useUserProfileQuery(user.token);





  return (
    <div className="grid grid-cols-3 gap-4 p-4">






      {data && <ProfileCard userData={data} />}






      <div className="col-span-2">
        {user.isAdmin ? <AdminOrder user={user} /> : <UserOrder user={user} />}

        {user.isAdmin ? <AdminFoodOrder user={user} /> : <UserFoodOrder user={user} />}


      </div>


    </div>
  )
}
export default UserProfile