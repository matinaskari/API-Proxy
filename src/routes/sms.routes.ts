import { Router } from "express";

import { sendSMS } from "../controllers/sms.controller";

export const router = Router();

router.get("/sendSMS", sendSMS);
