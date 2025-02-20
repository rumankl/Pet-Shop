import { Button, Card, Typography, Table, TableBody, TableCell, TableHead, TableRow, Avatar } from '@material-tailwind/react';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useGetAllFoodsQuery, useRemoveFoodMutation } from '../../food/foodApi';
import { base, baseUrl } from '../../../data/apis';
import { toast } from 'react-toastify';

const FoodAdmin = () => {
  const { isLoading, isError, error, data, refetch } = useGetAllFoodsQuery();
  const [removeFood, { isLoading: isDeleting }] = useRemoveFoodMutation();
  const handleDelete = (foodId) => {
    removeFood({ id: foodId })
      .then(() => {
        toast.success('Food deleted successfully');
        refetch();
        // Handle successful deletion (maybe show a success message)
      })
      .catch((err) => {
        // Handle error (maybe show an error message)
        console.error("Failed to delete food:", err);
      });
  };
  const nav = useNavigate();
  const TABLE_HEAD = ["", "Title", "CreatedAt",
    "Edit", "Delete"];
  // console.log(data);

  return (
    <div>
      <div className="mb-4 flex justify-between">
        <h1 className="text-2xl font-semibold">Welcome To Foods</h1>
        <Button onClick={() => nav('/food-form')} className="py-2 px-4" color="deep-purple" size="lg">Add Food</Button>
      </div>
      {/* edit and delect table  */}
      {<Card className="max-w-3xl">
        <table className=" table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.foods.map(({ title, image, createdAt, _id }, index) => {
              const isLast = index === data.foods.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-red-gray-50";

              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Avatar src={`${base}/${image}`} alt="avatar" />
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {title}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {createdAt}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Button onClick={() => nav(`/food-edit/${_id}`)} color="light-green" size="sm">Edit</Button>
                  </td>

                  <td className={classes}>
                    <Button
                      color="orange"
                      size="sm"
                      onClick={() => handleDelete(_id)} // Call the handleDelete function
                      disabled={isDeleting} // Disable the button while deleting
                    >
                      {isDeleting ? 'Deleting...' : 'Delete'}
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>}
    </div>
  )
}

export default FoodAdmin
