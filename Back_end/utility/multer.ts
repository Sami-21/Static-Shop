import multer from "multer";
const image = multer.diskStorage({
  destination(req, file, callback) {
    callback(null, "images");
  },
  filename(req, file, callback) {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    callback(null, day + "_" + month + " _ " + file.originalname);
  },
});
export const productImage = multer({ storage: image }).array("image", 10);
