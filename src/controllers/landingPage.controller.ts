import { NextFunction, Request, Response } from "express";
import { create, findContent, inactivateContent, update } from "../services/landingPage.service";


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

export const updateLandingPage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    req.body.user = res.locals.user;
    const landingPage = await update(req.params.idContent, req.body);
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

export const getLandingPage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const content = await findContent(req.params.idContent);
    res.status(200).json({
      status: "success",
      data: {
        content,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const deleteLandingPage = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const content = await inactivateContent(req.params.idContent, {
      ativo: false,
      user: res.locals.user,
    });
    res.status(200).json({
      status: "success",
      data: {
        content,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

