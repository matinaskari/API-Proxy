import { Request, Response, RequestHandler } from "express";

import axios from "axios";

export const sendSMS: RequestHandler = async (req: Request, res: Response) => {
  try {
    const config = {
      method: "get",
      url: `https://api.kavenegar.com/v1/${process.env.API_KEY_VALUE}/sms/send.json?receptor=09398791213&sender=10008663&message=TestAPIKavenegar`,
      headers: {},
    };
    let response = await axios.get(config.url);
    return res.status(200).json({
      user: response.data,
    });
  } catch (error) {
    return res.status(500).json({ error });
  }
};
