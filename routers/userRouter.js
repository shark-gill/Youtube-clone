import express from "express";
import routes from "../routes";
import {
  usersController,
  userDetailController,
  editProfileController,
  changePasswordController
} from "../controllers/userController";

const userRouter = express.Router();

userRouter.get(routes.users, usersController);
userRouter.get(routes.user_detail, userDetailController);
userRouter.get(routes.edit_profile, editProfileController);
userRouter.get(routes.change_password, changePasswordController);

export default userRouter;
