import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const loginuser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) {

      const pass = bcrypt.compareSync(password, isExist.password);
      if (!pass) {
        return res.status(401).json({ message: 'invalid credential' });
      }

      //console.log(isExist);

      const token = jwt.sign({
        id: isExist._id,
        isAdmin: isExist.isAdmin
      }, 'token');

      // res.cookie(
      //   'jwt',
      //   token,
      //   {
      //     httpOnly: true,
      //     maxAge: 24 * 60 * 60 * 1000,
      //     sameSite: 'None',
      //     secure: true,//true for production level //falsw fordev face



      //   }
      // );

      return res.status(200).json({
        token,
        fullname: isExist.fullname,
        email: isExist.email,
        isAdmin: isExist.isAdmin,
        message: 'user successfully logins' //add for message
      });

      // return res.status(200).json({ message: 'user successfully registered' });

    } else {
      return res.status(401).json({ message: 'invalid credential' });
    }

  } catch (err) {
    return res.status(400).json({ message: `${err}` });

  }

}

export const signupuser = async (req, res) => {
  const { fullname, email, password } = req.body
  try {
    const isExist = await User.findOne({ email: email });
    if (isExist) return res.status(409).json({ message: 'user already exist' });
    const hash = bcrypt.hashSync(password, 10);
    await User.create({ fullname, email, password: hash });
    return res.status(201).json({ message: 'user registered successfully' });
  } catch (error) {
    return res.status(400).json({ message: `${error.message}` });
  }
}