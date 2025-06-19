import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import fileUpload from "express-fileupload";
import FoodRoutes from "./routes/FoodRoutes.js";
import foodOrderRoutes from "./routes/foodOrderRoutes.js";
import messageRoutes from "./routes/messageRoutes.js";
import cors from "cors";
import cookieParser from "cookie-parser";
const port = 5001;


const app = express();
// app.use(cors());
app.use(cors(
  {
    // origin: ['https://pet-shop-xi-taupe.vercel.app', 'http://localhost:3000'],
    origin: ['https://pet-shop-xi-taupe.vercel.app', 'https://pet-shop-git-frontend-full-stack-f8ecbde2.vercel.app'],
    credentials: true
  }
));
app.use(cookieParser());
app.use(express.json());
app.use(express.static('uploads'));
// app.use(express.static('uploading'));
app.use(fileUpload());

mongoose.connect('mongodb+srv://rulokifs:mongodb@cluster0.xlryd.mongodb.net/PetShop').then((val) => {

})
  .catch((err) => {
    console.log(err);
  });
app.get('/', (req, res) => {
  return res.status(200).json({ message: 'welcome to shop' });
})


app.use('/api/users', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
// app.use('/api/foods', require('./routes/foodRoutes'));
// app.use('/api/orders', require('./routes/orderRoutes'));
app.use('/api/foods', FoodRoutes);
app.use('/api/foodorders', foodOrderRoutes);
app.use('/api/messages', messageRoutes);



app.listen(port, () => {
  console.log(`server is running on port ${port}`)
});




// import express from "express";
// import productRoutes from './Routes/productRoutes.js';
// import authRoutes from './routes/authRoutes.js';


// import mongoose from "mongoose";
// import fileUpload from "express-fileupload";

// const port = 5001;
// import cors from 'cors';
// const app = express();


// app.use(cors());



// app.use(express.json());
// app.use(express.static('uploads'));

// app.use(fileUpload({
//   // limits: { fileSize: 5 * 1024 * 1024 },
// }));

// mongoose.connect('mongodb+srv://rulokifs:mongodb@cluster0.xlryd.mongodb.net/PetShop').then((val) => {

// }).catch((err) => {
//   console.log(err);
// });

// app.get('/', (req, res) => {
//   return res.status(200).json({ message: 'welcome to shop' });
// })



// app.use('/api/users', authRoutes);
// app.use('/api/products', productRoutes);


// app.listen(port, () => {
//   console.log('listening and connected');
// });
