import { Response, NextFunction, RequestHandler } from "express";
import axios from "axios";
import { clients } from "../DB/clients.json";
import { services } from "../DB/services.json";
import { serviceSecrets } from "../DB/service.secrets";

export const createProxy: RequestHandler = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const currentUser = clients.find((o) => o.token === req.clientToken);
    const currentService = services.find(
      (o) => o.name === currentUser?.service
    );
    const originalUrl = req.originalUrl;
    const neededAdderes = originalUrl.replace(currentUser?.pathPrefix, "");
    // init type for header
    interface Header {
      [key: string]: any;
    }

    // init type for axios config
    type configType = {
      method: string;
      url: string;
      headers: Header;
      params?: string;
    };

    const serviceIndex = serviceSecrets.findIndex(
      (obj) => obj.name === currentService?.name
    );

    const config = {} as configType;
    config.method = "get";
    config.url = `${currentService?.baseURL}${neededAdderes}`;
    if (currentService?.headerOfToken && serviceSecrets[serviceIndex] != null) {
      config.headers = {
        [currentService?.headerOfToken]: serviceSecrets[serviceIndex].secret,
      };
    }
    config.params = req.query;

    try {
      const response = await axios(config);

      return res.status(200).json({
        status: true,
        message: "done",
        data: response.data,
      });
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
