import multer from "multer";
import path from "path";
import crypto from "crypto";

export default {
  storage: multer.diskStorage({
    destination: path.resolve(__dirname, "..", "..", "uploads", "points"),
    filename(req, file, cb) {
      const hash = crypto.randomBytes(8).toString("hex");

      const fileName = `${hash}-${file.originalname}`;

      cb(null, fileName);
    },
  }),
};
