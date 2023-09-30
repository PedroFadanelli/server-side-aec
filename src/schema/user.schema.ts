import { object, string, TypeOf } from "zod";

export const createUserSchema = object({
  body: object({
    name: string({ required_error: "Name is required" }),
    email: string({ required_error: "Email is required" }).email(
      "Invalid email"
    ),
    password: string({ required_error: "Password is required" })
      .min(8, "Password must be more than 8 characters")
      .max(32, "Password must be less than 32 characters"),
    passwordConfirm: string({ required_error: "Please confirm your password" }),
  }).refine((data: { password: any; passwordConfirm: any; }) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  }),
});

export const loginUserSchema = object({
  body: object({
    email: string({ required_error: "Email is required" }).email(
      "Invalid email or password"
    ),
    password: string({ required_error: "Password is required" }).min(
      8,
      "Invalid email or password"
    ),
  }),
});

export const editSchema = object({
  body: object({
    titulo: string({ required_error: "titulo is required" }).min(
      5,
      "Invalid titulo"
    ),
    texto1: string({ required_error: "content is required" }).min(
      50,
      "Invalid text"
    ),
  }),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>["body"];
export type LoginUserInput = TypeOf<typeof loginUserSchema>["body"];
export type editInput = TypeOf<typeof editSchema>["body"];
