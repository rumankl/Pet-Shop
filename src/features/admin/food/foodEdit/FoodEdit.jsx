import { useParams } from "react-router"
import FoodEditForm from "./FoodEditForm";
import { useGetFoodByIdQuery } from "../../../food/foodApi";
const FoodEdit = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetFoodByIdQuery(id);
  return (
    <div>

      {data && <FoodEditForm food={data} />}




    </div>
  )
}
export default FoodEdit