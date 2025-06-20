import jwt from "jsonwebtoken";

// export const userCheck = (req, res, next) => {
//   // const token = req.headers.authorization;
//   const token = req.cookies?.jwt;
//   const decode = jwt.decode(token, 'token');
//   if (decode) {
//     req.id = decode.id;
//     req.isAdmin = decode.isAdmin;
//     next();
//   } else {
//     return res.status(401).json({ message: 'unauthorized user' });
//   }
// }

export const userCheck = (req, res, next) => {
  const token = req.cookies?.jwt;
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  try {
    const decode = jwt.verify(token, 'token');
    req.id = decode.id;
    req.isAdmin = decode.isAdmin;
    next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
}

export const adminCheck = (req, res, next) => {
  if (req.isAdmin) {
    next();
  } else {
    return res.status(401).json({ message: 'you are not unauthorized ' });
  }
}


////////////////////////////////////////////

// import jwt from 'jsonwebtoken';


// export const usercheck = (req, res, next) => {
//   const token = req.headers.authorization;
//   // const token = req.cookies?.jwt;

//   const decode = jwt.decode(token, 'token');
//   if (decode) {
//     req.id = decode.id;
//     req.isAdmin = decode.isAdmin;
//     next();
//   } else {
//     return res.status(401).json({ message: 'you are not authorized' });
//   }

// }

// export const admincheck = (req, res, next) => {
//   if (req.isAdmin) {
//     next();
//   } else {
//     return res.status(401).json({ message: 'you are not authorized' });
//   }

// }

