import { Router } from "express";

import { sendSMS } from "../controllers/sms.controller";

export const router = Router();

router.get("/s1", sendSMS);

router.get("/s2", sendSMS);
