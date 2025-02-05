import path from 'path';


const supportedExts = ['.png', '.jpg', '.webp', '.gif', '.jpeg'];
export const fileCheck = (req, res, next) => {

  const file = req.files?.image;

  if (!file) return res.status(400).json({ message: 'please provide valid image file' });

  const type = path.extname(file.name);

  if (!supportedExts.includes(type)) return res.status(400).json({ message: 'please provide valid image file' });

  file.mv(`./uploads/${file.name}`, (err) => {

    if (err) return res.status(400).json({ message: err.message });
    req.image = file.name;
    next();
  })

}

export const updateFileCheck = (req, res, next) => {

  const file = req.files?.image;

  if (!file) return next();

  const type = path.extname(file.name);

  if (!supportedExts.includes(type)) return res.status(400).json({ message: 'please provide valid image file' });



  file.mv(`./uploads/${file.name}`, (err) => {

    if (err) return res.status(400).json({ message: err.message });
    req.newImage = file.name;
    return next();
  })

}
