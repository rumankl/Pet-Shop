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
      //logout setup ////////////////////////////
      const token = jwt.sign({
        id: isExist._id,
        isAdmin: isExist.isAdmin
      }, 'token');

      res.cookie(
        'jwt',
        token,
        {
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
          sameSite: 'None',
          secure: true,//true for production level //falsw fordev face



        }
      );

      return res.status(200).json({
        token,
        // fullname: isExist.fullname,
        // email: isExist.email,
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

export const updateUser = async (req, res) => {
  const { email, password, fullname } = req.body;

  try {
    const isExist = await User.findById(req.id);
    if (isExist) {
      isExist.fullname = fullname || isExist.fullname;
      isExist.password = password || isExist.password;
      isExist.email = email || isExist.email;
      await isExist.save(); // it will save in DB
      return res.status(200).json({ message: 'successfully updated' });
    } else {
      return res.status(401).json({ message: 'user not found' });
    }

  } catch (err) {
    return res.status(400).json({ message: `${err}` });

  }

}

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.id).select('fullname email');
    if (!user) return res.status(404).json({ message: 'user not found' });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}
export const userLogout = async (req, res) => {
  try {
    res.clearCookie('jwt');
    res.status(200).json({ message: 'Logged out successfully' });
  } catch (err) {
    return res.status(400).json({ message: `${err}` });
  }
}