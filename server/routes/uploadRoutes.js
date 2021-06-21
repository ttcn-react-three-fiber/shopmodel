import express from "express";
import {
  uploadAvatar,
  uploadProduct,
  uploadModel,
  upload3d,
} from "../controllers/uploadController.js";
import { admin, protect } from "../middleware/auth.js";
import { upModel, uploader, uploadModels } from "../middleware/upload.js";

const router = express.Router();

router.route("/avatar").post(protect, uploader, uploadAvatar);
router.route("/product").post(protect, admin, uploader, uploadProduct);

router.route("/model").post(protect, uploadModel, uploadModels);

export default router;
