import { Router } from "express";
import { checkAuthorizationToken } from "../middleware/authorization.middleware";
import { createProxy } from "../controllers/createProxy.controller";
import { setSecret } from "../controllers/setSecret.controller";
import { secretValidator } from "../middleware/secret.validator";
export const router = Router();

router.get("/c/:a?/:b?/:c?", checkAuthorizationToken, createProxy);

router.post("/set-secret", secretValidator, setSecret);
