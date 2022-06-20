import { Router } from "express";
import { router as proxyRoutes } from "../routes/proxy.routes";

const router = Router();

router.use("/proxy", proxyRoutes);

export default router;
