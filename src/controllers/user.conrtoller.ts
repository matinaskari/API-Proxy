import { Request, Response, RequestHandler } from "express";

import axios from "axios";

export const getUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    const axiosConfig = {
      method: "get",
      url: "https://api.neshan.org/v4/reverse?lat=35.715298&lng=51.404343",
      headers: {
        "Api-Key": "service.BbET86adQeeeMhZSJkjJlABnl6PMbMrxBSrAqAL0",
      },
    };
    console.log("1 --->", req.baseUrl);
    console.log("2 --->", req.url);
    console.log(req.originalUrl);

    let response = await axios(axiosConfig);

    // let response = await axios.get(
    //   `https://reqres.in/api/users/${req.params.id}`,
    // );
    return res.status(200).json({
      user: response.data,
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
