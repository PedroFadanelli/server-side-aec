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
import { createLandingPageSchema } from "../schema/landingPage.schema";
import { createLandingPage } from "../controllers/landingPage.controller"; 

const router = express.Router();

// Homepage post route
router.post("/homepage/posts", [requireUser, validate(createLandingPageSchema)], createLandingPage);

router.get("/homepage/posts", [validate(createLandingPageSchema)], createLandingPage);

// Refreh homepage post toke route
router.put("/homepage/posts", [validate(createLandingPageSchema)], createLandingPage);

router.use(deserializeUser, requireUser);

// Delete Edit
router.delete("/homepage/posts", [requireUser, validate(createLandingPageSchema)], createLandingPage);

export default router;
