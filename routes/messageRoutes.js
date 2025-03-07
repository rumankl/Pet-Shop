import express from "express";
import {
  createMessage,
  deleteMessage,
  getAllMessages,
  getMessagesById
} from "../controllers/messageController.js"; // Import the controller functions
import Joi from "joi";
import validator from "express-joi-validation";

const validate = validator.createValidator({});

const messageSchema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  email: Joi.string().email().required(),
  description: Joi.string().required()
});
const router = express.Router();

// Route to create a new message
router.route('/message').post(validate.body(messageSchema), createMessage);

// Route to get all messages
router.route('/message').get(getAllMessages);

// // Route to get a specific message by ID

router.route('/:id').get(getMessagesById).delete(deleteMessage);

// // Route to update a specific message by ID
// router.put("/:id", updateMessage);

// Route to delete a specific message by ID
// router.delete("/:id", deleteMessage);

export default router;
