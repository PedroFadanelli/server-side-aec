import mongoose from "mongoose";
import { array, object, string, TypeOf } from "zod";
import { updateLandingPage } from "../controllers/landingPage.controller";

export const getContentSchema = object({
  params: object({
    idContent: string({ required_error: "idContent is required" }),
  }).refine((data) => isValidObjectId(data.idContent) === true, {
    message: "idContent is invalid",
    path: ["idContent"],
  }),
});

export const createContentSchema = object({
  body: object({
    banner: string({ required_error: "Banner is required" }),
    carrousselEdicoes: string({ required_error: "Fotos são necessarias" })
      .min(1, "Precisa ter mais fotos")
      .max(12, "Não pode passar de 12 fotos").array(),
    subTitulo1: string({ required_error: "Um texto é necessario" }),
    subTitulo2: string({ required_error: "Um texto é necessario" }),
    subTitulo3: string({ required_error: "Um texto é necessario" }),
    texto1: string({ required_error: "Um texto é necessario" }),
    texto2: string({ required_error: "Um texto é necessario" }),
    texto3: string({ required_error: "Um texto é necessario" }),
    videos: string({ required_error: "Os videos são necessarios" })
      .max(6, "Não pode passar de 6 videos").array(),
    carrousselDepoimentos: string({ required_error: "Fotos são necessarias" })
      .array()
      .min(1, "Precisa ter mais fotos")
      .max(12, "Não pode passar de 12 fotos"),
  }),
});

export const updateContentSchema = object({
  params: object({
    idContent: string({ required_error: "idContent is required" }),
  }).refine((data) => isValidObjectId(data.idContent) === true, {
    message: "idContent is invalid",
    path: ["idContent"],
  }),
  body: object({
    banner: string({ required_error: "Banner is required" }),
    carrousselEdicoes: string({ required_error: "Fotos são necessarias" })
      .min(1, "Precisa ter mais fotos")
      .max(12, "Não pode passar de 12 fotos"),
    subTitulo1: string({ required_error: "Um texto é necessario" }),
    subTitulo2: string({ required_error: "Um texto é necessario" }),
    subTitulo3: string({ required_error: "Um texto é necessario" }),
    texto1: string({ required_error: "Um texto é necessario" }),
    texto2: string({ required_error: "Um texto é necessario" }),
    texto3: string({ required_error: "Um texto é necessario" }),
    videos: string({ required_error: "Os videos são necessarios" })
      .max(6, "Não pode passar de 6 videos").array(),
    carrousselDepoimentos: string({ required_error: "Fotos são necessarias" })
      .array()
      .min(1, "Precisa ter mais fotos")
  }),
});

export const deleteContentSchema = object({
  params: object({
    idContent: string({ required_error: "idContent is required" }),
  }).refine((data) => isValidObjectId(data.idContent) === true, {
    message: "idContent is invalid",
    path: ["idContent"],
  }),
});

export function isValidObjectId(adId: string) {
  // Cria variável para operação
  return mongoose.Types.ObjectId.isValid(adId);
}


export type UpdateContentSchema = TypeOf<typeof updateContentSchema >["body"];
export type CreateContentSchema = TypeOf<typeof createContentSchema>["body"];
//rota get delete etc tem no git