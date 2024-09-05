import express from "express";
import {
  registerController,
  loginController,
} from "../controllers/authController.js";
import requireSignIn from "../middleware/auth.js";

const router = express.Router();

router.route("/register").post(registerController);
router.route("/login").post(loginController);
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
