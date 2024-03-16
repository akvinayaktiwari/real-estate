import multer from "multer";
import path from 'path'

const url = 'https://server-tpbkpxdbza-el.a.run.app';
const galUploadDirectory = 'blog-images';
const uploadDirectory = 'property-images';


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDirectory);
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now()
    cb(null, uniqueSuffix+file.originalname);
  },
});

export const upload = multer({ storage: storage });



export const uploadImage = (request, response) => {
    if(!request.file)
        // console.log(response)
        return response.status(404).json("File not found");
        
    
    const imageUrl = `${url}/${uploadDirectory}/${request.file.filename}`;

    response.status(200).json({'imageUrl':imageUrl});    
}

export const uploadGallery = (req, res) => {
  
  
  const imageUrls = req.files.map(file => `${url}/${uploadDirectory}/${file.filename}`);

  res.json({ imageUrls }); 
}
