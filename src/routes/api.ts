import { Router } from "express";
import { testLogger } from "../middleware/test.middleware";
import { testController } from "../controllers/test.controller";
import { router as userRoutes } from "../routes/user.routes";
import { router as smsRoutes } from "../routes/sms.routes";

const router = Router();

router.post("/test", testLogger, testController);

router.use("/user", userRoutes);

router.use("/sms", smsRoutes);

export default router;
