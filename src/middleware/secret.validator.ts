import { Request, Response, NextFunction, RequestHandler } from "express";
import axios from "axios";
import { services } from "../DB/services.json";

export const secretValidator: RequestHandler = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // find service
    const targetService = services.find(
      (o) => o.name === req.body.service_name
    );

    interface Header {
      [key: string]: string;
    }

    type configType = {
      method: string;
      url: string;
      headers: Header;
      params?: string;
    };

    // set config for axios
    const config = {} as configType;
    config.method = "get";
    config.url = `${targetService?.["test-url"]}`;
    if (targetService?.headerOfToken) {
      config.headers = {
        [targetService?.headerOfToken]: req.body.service_secret,
      };
    }

    try {
      const response = await axios(config);
      next();
    } catch (error: any) {
      // handle axios error
      console.log("[-] Axios error >" + error.message);

      return res.status(error.response.data.code).json({
        status: false,
        message: error.response.data.message,
        data: {},
      });
    }
  } catch (error: any) {
    console.log("[-] unhandled error > " + error.message);

    return res.status(500).json({
      status: false,
      message: "something went wrong",
      data: {},
    });
  }
};
