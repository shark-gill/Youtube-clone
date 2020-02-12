import express from "express";
import routes from "../routes";
import {
  uploadController,
  videoDetailController,
  editVideoController,
  deleteVideoController,
  videoController
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videoController);
videoRouter.get(routes.upload, uploadController);
videoRouter.get(routes.video_detail, videoDetailController);
videoRouter.get(routes.edit_video), editVideoController;
videoRouter.get(routes.delete_video, deleteVideoController);

export default videoRouter;
