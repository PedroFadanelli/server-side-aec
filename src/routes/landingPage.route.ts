import express from "express";
import {
  getAllContentsController,
  getLandingPage,
  createLandingPage,
  updateLandingPage,
  deleteLandingPage,
} from "../controllers/landingPage.controller";
import { deserializeUser } from "../middleware/deserializeUser";
import { requireUser } from "../middleware/requireUser";
import { validate } from "../middleware/validate";
import {
  getContentSchema,
  createContentSchema,
  updateContentSchema,
  deleteContentSchema,
} from "../schema/landingPage.schema";

const router = express.Router();
router.use(deserializeUser, requireUser);

router.get("/", getAllContentsController);
router.get("/:idContent", validate(getContentSchema), getLandingPage);
router.post("/", validate(createContentSchema), createLandingPage);
router.put(
  "/:idContent",
  validate(updateContentSchema),
  updateLandingPage
);
router.delete(
  "/:idContent",
  validate(deleteContentSchema),
  deleteLandingPage
);

export default router;