import { Button, Card, Typography } from "@material-tailwind/react";

import { useNavigate } from "react-router";
// import { useGetAllQuery } from "./foodorderApi";
import { useGetAllMessagesQuery, useRemoveMessageMutation } from "./messageApi";

const TABLE_HEAD = ["MessageId", "Total", "CreatedAt", "", ''];

const DisplayMessage = () => {
  const nav = useNavigate();
  const { isLoading, data, isError, error } = useGetAllMessagesQuery();
  const [removeMessage, { isLoading: isDeleting }] = useRemoveMessageMutation();

  const handleDelete = async (id) => {
    try {
      await removeMessage({ id }); // Trigger delete action
    } catch (err) {
      console.error("Error deleting message:", err);
    }
  };

  if (isLoading) {
    return <h1>Loading.....</h1>
  }


  return (
    <div>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
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
            {data?.map(({ name, createdAt, _id, }, index) => {
              const isLast = index === data.length - 1;
              const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
              return (
                <tr key={_id}>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {_id}
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name.charAt(0).toUpperCase() + name.slice(1)}
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
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      <Button
                        onClick={() => nav(`/message-detail/${_id}`)}
                        size='sm' color='green'>Detail</Button>
                    </Typography>
                  </td>
                  <td className={classes}>
                    <Button
                      color="orange"
                      size="sm"
                      onClick={() => handleDelete(_id)}
                      disabled={isDeleting}
                    >
                      {isDeleting ? "Deleting..." : "Delete"}
                    </Button>
                  </td>


                </tr>
              );
            })}
          </tbody>
        </table>
      </Card>


    </div>
  )
}
export default DisplayMessage