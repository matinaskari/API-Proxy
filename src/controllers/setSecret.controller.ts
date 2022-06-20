import { Request, Response, NextFunction, RequestHandler } from "express";
import { serviceSecrets } from "../DB/service.secrets";

export const setSecret: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const targetServiceIndex: number = serviceSecrets.findIndex(
      (service) => service.name === req.body.service_name
    );

    serviceSecrets[targetServiceIndex].secret = req.body.service_secret;

    return res.status(200).json({
      status: true,
      message: "true",
      data: {},
    });
  } catch (error: any) {
    console.log("[-] unhandled error > " + error.message);

    return res.status(500).json({
      status: false,
      message: "something went wrong",
      data: {},
    });
  }
};
