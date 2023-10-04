import { NextFunction, Request, Response } from "express";
import { create } from "../services/landingPage.service";

export const createLandingPage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const landingPage = await create(req.body);
    res.status(200).json({
      status: "success",
      result: 1,
      data: {
        landingPage,
      },
    });
  } catch (err: any) {
    next(err);
  }
};


