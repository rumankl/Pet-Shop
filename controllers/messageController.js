import Message from "../models/Message.js";

// Create a new message
export const createMessage = async (req, res) => {
  try {
    const { name, email, description } = req.body;
    const newMessage = new Message({ name, email, description });

    const savedMessage = await newMessage.save();
    res.status(201).json(savedMessage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all messages
export const getAllMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a specific message by ID
export const getMessagesById = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findById(id);

    if (!message) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json(message);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a message by ID
// export const updateMessage = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { name, email, description } = req.body;

//     const updatedMessage = await Message.findByIdAndUpdate(id, { name, email, description }, { new: true });

//     if (!updatedMessage) {
//       return res.status(404).json({ message: "Message not found" });
//     }

//     res.status(200).json(updatedMessage);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Delete a message by ID
export const deleteMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMessage = await Message.findByIdAndDelete(id);

    if (!deletedMessage) {
      return res.status(404).json({ message: "Message not found" });
    }

    res.status(200).json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
