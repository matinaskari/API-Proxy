import { Router } from "express";
import { testLogger } from "../middleware/test.middleware";
import { checkAuthorizationToken } from "../middleware/authorization.middleware";
import { createProxy } from "../middleware/createProxy.middleware";
import { testController } from "../controllers/test.controller";
import { router as userRoutes } from "../routes/user.routes";
import { router as smsRoutes } from "../routes/sms.routes";

const router = Router();

router.post("/test", checkAuthorizationToken, testLogger, testController);

router.get("/proxy/:version/:abcd", checkAuthorizationToken, createProxy);

router.use("/user", userRoutes);

router.use("/sms", smsRoutes);

export default router;
