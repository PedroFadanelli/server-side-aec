import express from "express";
import {
  getAllQuestionsController
} from "../controllers/pergunta.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";

const router = express.Router();
router.use(deserializeUser, requireUser);

router.get("/", getAllQuestionsController);

export default router;
