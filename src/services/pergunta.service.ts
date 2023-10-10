import { omit, get } from "lodash";
import { FilterQuery, QueryOptions } from "mongoose";
import config from "config";
import perguntaModel, { Pergunta } from "../models/pergunta.model";

import { excludedFields } from "../controllers/auth.controller";
import { signJwt } from "../utils/jwt";
import redisClient from "../utils/connectRedis";
import { DocumentType } from "@typegoose/typegoose";

export const findAllQuestions = async () => {
  return await perguntaModel.find();
}; 