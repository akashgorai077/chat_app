import express from "express";
import {
  login,
  register,
  getProfile,
  logout,
  getOtherUsers,
} from "../controllers/userController.js"; // ✅ Import correctly
import { isAuthenticated } from "../middlewares/authMiddlware.js";
const router = express.Router();

router.post("/register", register); // ✅ Use imported function
router.post("/login", login); // ✅ Use imported function
router.post("/logout", isAuthenticated, logout); // ✅ Use imported function
router.get("/get-profile", isAuthenticated, getProfile); // ✅ Use imported function
router.get("/get-other-users", isAuthenticated, getOtherUsers); // ✅ Use imported function

export default router; // ✅ Correct ES module export
