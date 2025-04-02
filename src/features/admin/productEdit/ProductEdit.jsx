import { useParams } from "react-router"
import { useGetProductByIdQuery } from "../../products/productApi";
import ProductEditForm from "./ProductEditForm";


const ProductEdit = () => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useGetProductByIdQuery(id);



  return (
    <div>

      {data && <ProductEditForm product={data} />}


    </div>
  )
}
export default ProductEdit