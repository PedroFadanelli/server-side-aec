import express from "express";
import {
  loginHandler,
  logoutHandler,
  refreshAccessTokenHandler,
  registerHandler,
} from "../controllers/auth.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";
import { editSchema } from "../schema/user.schema";
import { editHandler } from "../controllers/user.controller"; 

const router = express.Router();

// Register user route
router.post("/homepage/posts", validate(editSchema), editHandler);

// Login user route
router.get("/homepage/posts", validate(editSchema), editHandler);

// Refresh access toke route
router.put("/homepage/posts", validate(editSchema), editHandler);

router.use(deserializeUser, requireUser);

// Logout User
router.delete("/homepage/posts",  validate(editSchema), editHandler);

export default router;
