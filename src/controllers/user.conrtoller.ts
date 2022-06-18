import { Request, Response, RequestHandler } from "express";

import axios from "axios";

export const getUser: RequestHandler = async (req: Request, res: Response) => {
  try {
    let response = await axios.get(
      `https://reqres.in/api/users/${req.params.id}`
    );
    return res.status(200).json({
      user: response.data,
    });
  } catch (error) {
    return res.status(400).json({ ok: false });
  }
};
