import { Request, Response, RequestHandler } from "express";

export const testController: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    console.log(req.body);
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(400).json({ ok: false });
  }
};
