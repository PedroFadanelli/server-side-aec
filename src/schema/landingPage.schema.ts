import { array, object, string, TypeOf } from "zod";

export const createLandingPageSchema = object({
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
      .max(6, "Não pode passar de 12 fotos").array(),
    carrousselDepoimentos: string({ required_error: "Fotos são necessarias" })
      .array()
      .min(1, "Precisa ter mais fotos")
      .max(12, "Não pode passar de 12 fotos"),
  }),
});


export type editInput = TypeOf<typeof createLandingPageSchema>["body"];
//rota get delete etc tem no git