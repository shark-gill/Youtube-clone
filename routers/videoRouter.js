import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

videoRouter.get(routes.videos, (req, res) => res.send("Videos"));
videoRouter.get(routes.upload, (req, res) => res.send("Upload"));
videoRouter.get(routes.video_detail, (req, res) => res.send("Video Detail"));
videoRouter.get(routes.edit_video, (req, res) => res.send("Edit Video"));
videoRouter.get(routes.delete_video, (req, res) => res.send("Delete Video"));

export default videoRouter;
