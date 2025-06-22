import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import { clearFoodCarts } from "../foodcart/foodcartSlice";
import { useAddFoodOrderMutation } from "../features/foodOrder/foodorderApi";
export function DisplayDialog({ foodtotalAmount, foodorderItems }) {
  const dispatch = useDispatch();
  const [addFoodOrder, { isLoading }] = useAddFoodOrderMutation();
  const [open, setOpen] = React.useState(false);

  const { user } = useSelector((state) => state.userSlice);

  const handleOpen = () => setOpen(!open);


  const handleSubmit = async () => {
    try {
      await addFoodOrder({
        body: { foodtotalAmount, foodorderItems },
        // token: user.token
        token: user.token
      }).unwrap();
      toast.success('success');
      dispatch(clearFoodCarts());

    } catch (err) {
      toast.error(`${err.data?.message}  `);

    }
  }

  return (
    <>

      <Button loading={isLoading} onClick={handleOpen} className='mt-10'>Place An Order</Button>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you Sure</DialogHeader>
        <DialogBody>
          You Want To order
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button variant="gradient" color="green" onClick={() => {
            handleSubmit();
            handleOpen();
          }}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
