import { NextFunction, Request, Response } from "express";
import { findAllUsers } from "../services/user.service";
import { editSession } from "../services/session.service";

export const getMeHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = res.locals.user;
    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const getAllUsersHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users = await findAllUsers();
    res.status(200).json({
      status: "success",
      result: users.length,
      data: {
        users,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

export const editHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const edit = await editSession();
    res.status(200).json({
      status: "success",
      result: edit.length,
      data: {
        edit,
      },
    });
  } catch (err: any) {
    next(err);
  }
};

