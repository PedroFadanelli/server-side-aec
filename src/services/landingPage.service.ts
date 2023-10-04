import { omit, get } from "lodash";
import { FilterQuery, QueryOptions } from "mongoose";
import config from "config";
import userModel, { User } from "../models/user.model";
import { excludedFields } from "../controllers/auth.controller";
import { signJwt } from "../utils/jwt";
import redisClient from "../utils/connectRedis";
import { DocumentType } from "@typegoose/typegoose";
import landingPageModel, { landingPage } from "../models/landingPage.model";

// CreateUser service
export const create = async (input: Partial<landingPage>) => {
  const landingPage = await landingPageModel.create(input);
  return landingPage;
};