import { Request, Response, RequestHandler, NextFunction } from "express";

export const testLogger: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    console.log("test middleware");
    next();
  } catch (error) {
    return res.status(400).json({ ok: false });
  }
};
