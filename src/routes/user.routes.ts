import { Router } from "express";

import { getUser } from "../controllers/user.conrtoller";

export const router = Router();

router.get("/getUser/:id", getUser);
