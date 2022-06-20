import { Router } from "express";
import { testController } from "../controllers/test.controller";
import { router as smsRoutes } from "../routes/sms.routes";
import { router as proxyRoutes } from "../routes/proxy.routes";

const router = Router();

router.post("/test", testController);

router.use("/proxy", proxyRoutes);

router.use("/sms", smsRoutes);

export default router;
