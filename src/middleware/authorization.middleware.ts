import { Request, Response, RequestHandler, NextFunction } from "express";
import { tokenChecker } from "../tools/authorization.tools";

export const checkAuthorizationToken: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (
      !req.headers.authorization ||
      !tokenChecker(req.headers.authorization)
    ) {
      return res.status(401).json({
        status: false,
        message: "athorization failed",
        data: {},
      });
    }
    next();
  } catch (error: any) {
    console.log("[-] unhandled error > " + error.message);

    return res.status(500).json({
      status: false,
      message: "something went wrong",
      data: {},
    });
  }
};
