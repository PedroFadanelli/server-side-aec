import { NextFunction, Request, Response } from "express";
import {
  findAllQuestions,
} from "../services/pergunta.service";

export const getAllQuestionsController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const questions = await findAllQuestions();
    console.log(questions);
    res.status(200).json({
      status: "success",
      data: {
        questions,
      },
    });
  } catch (err: any) {
    next(err);
  }
};