import { Request, Response, RequestHandler } from "express";

export const testController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    console.log("1 --->", req.baseUrl);
    console.log("2 --->", req.url);
    console.log(req.originalUrl);

    return res.status(200).json({ ok: true });
  } catch (error: any) {
    console.log("[-] unhandled error > " + error.message);

    return res.status(500).json({
      status: false,
      message: "something went wrong",
      data: {},
    });
  }
};
