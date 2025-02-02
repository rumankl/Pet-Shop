import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const UserRoutes = () => {
  const { user } = useSelector((state) => state.userSlice);
  const locations = useLocation();
  return user ? <Navigate to="/" state={{ from: locations }} replace /> : <Outlet />;
  // return user ? <Navigate to="/"  /> : <Outlet />;  onluy user log show
}
export default UserRoutes