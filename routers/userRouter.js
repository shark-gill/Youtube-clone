import express from "express";
import routes from "../routes";
import {
  userDetailController,
  editProfileController,
  changePasswordController
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.changePassword, changePasswordController);
userRouter.get(routes.editProfile, editProfileController);
userRouter.get(routes.userDetail, userDetailController);

export default userRouter;
