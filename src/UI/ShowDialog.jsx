// import React from "react";
// import {
//   Button,
//   Dialog,
//   DialogHeader,
//   DialogBody,
//   DialogFooter,
// } from "@material-tailwind/react";
// import { useDispatch, useSelector } from "react-redux";
// import { useAddOrderMutation } from "../features/order/orderApi";
// import { toast } from "react-toastify";
// import { clearCarts } from "../features/cart/cartSlice";

// export function ShowDialog({ totalAmount, orderItems }) {
//   const dispatch = useDispatch();
//   const [addOrder, { isLoading }] = useAddOrderMutation();
//   const [open, setOpen] = React.useState(false);

//   const { user } = useSelector((state) => state.userSlice);

//   const handleOpen = () => setOpen(!open);


//   const handleSubmit = async () => {
//     try {
//       await addOrder({
//         body: { totalAmount, orderItems },
//         // token: user.token
//         token: user.token
//       }).unwrap();
//       toast.success('success');
//       dispatch(clearCarts());

//     } catch (err) {
//       toast.error(`${err.data?.message}`);

//     }
//   }


//   return (
//     <>

//       <Button loading={isLoading} onClick={handleOpen} className='mt-10'>Place An Order</Button>

//       <Dialog open={open} handler={handleOpen}>
//         <DialogHeader>Are you Sure</DialogHeader>
//         <DialogBody>
//           You Want To order
//         </DialogBody>
//         <DialogFooter>
//           <Button
//             variant="text"
//             color="red"
//             onClick={handleOpen}
//             className="mr-1"
//           >
//             <span>Cancel</span>
//           </Button>
//           <Button variant="gradient" color="green" onClick={() => {
//             handleSubmit();
//             handleOpen();
//           }}>
//             <span>Confirm</span>
//           </Button>
//         </DialogFooter>
//       </Dialog>
//     </>
//   );
// }




import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import { useAddOrderMutation } from "../features/order/orderApi";
import { toast } from "react-toastify";
import { clearCarts } from "../features/cart/cartSlice";

export function ShowDialog({ totalAmount, orderItems }) {
  const dispatch = useDispatch();
  const [addOrder, { isLoading }] = useAddOrderMutation();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen((prev) => !prev);

  const handleSubmit = async () => {
    try {
      await addOrder({
        body: { totalAmount, orderItems },
      }).unwrap();

      toast.success("Order placed successfully!");
      dispatch(clearCarts());
      setOpen(false); // close dialog only after success
    } catch (err) {
      toast.error(err?.data?.message || "Failed to place order");
    }
  };

  return (
    <>
      <Button loading={isLoading} onClick={handleOpen} className="mt-10">
        Place An Order
      </Button>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Are you sure?</DialogHeader>
        <DialogBody>Do you want to confirm the order?</DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
            disabled={isLoading}
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            <span>{isLoading ? "Placing..." : "Confirm"}</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

