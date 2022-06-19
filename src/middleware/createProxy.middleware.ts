import { Request, Response, NextFunction, RequestHandler } from "express";
import axios from "axios";

export const createProxy: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const config = {
      method: "get",
      url: `https://api.neshan.org/v4/reverse`,
      headers: {
        "Api-Key": "service.BbET86adQeeeMhZSJkjJlABnl6PMbMrxBSrAqAL0",
      },
      params: req.query,
    };
    let response = await axios(config);
    return res.status(200).json({
      status: false,
      message: "something went wrong",
      data: {
        a: req.params,
        b: req.query,
        d: req.originalUrl,
        c: response.data,
      },
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
