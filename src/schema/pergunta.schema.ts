import mongoose from "mongoose";
import { array, number, object, string, TypeOf } from "zod";

export const getQuestionSchema = object({
  params: object({
    idPergunta: string({ required_error: "idPergunta is required" }),
  }).refine((data) => isValidObjectId(data.idPergunta) === true, {
    message: "idPergunta is invalid",
    path: ["idPergunta"],
  }),
});

export const createQuestionSchema = object({
  body: object({
    descricao: string({ required_error: "descricao is required" }),
    tipo: number({ required_error: "tipo is required" }),
    opcoes: string({ required_error: "marca is required" }).array(),
  }),
});

export const updateQuestionSchema = object({
  params: object({
    idPergunta: string({ required_error: "idPergunta is required" }),
  }).refine((data) => isValidObjectId(data.idPergunta) === true, {
    message: "idPergunta is invalid",
    path: ["idPergunta"],
  }),
  body: object({
    descricao: string({ required_error: "descricao is required" }),
    tipo: string({ required_error: "tipo is required" }),
    opcoes: string({ required_error: "marca is required" }).array(),
  }),
});

export const deleteQuestionSchema = object({
  params: object({
    idPergunta: string({ required_error: "idPergunta is required" }),
  }).refine((data) => isValidObjectId(data.idPergunta) === true, {
    message: "idPergunta is invalid",
    path: ["idPergunta"],
  }),
});

export function isValidObjectId(adId: string) {
  // Cria variável para operação
  return mongoose.Types.ObjectId.isValid(adId);
}

export type CreateQuestionSchema = TypeOf<typeof createQuestionSchema>["body"];
export type UpdateQuestionSchema = TypeOf<typeof updateQuestionSchema>["body"];