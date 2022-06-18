import express, { Router } from "express";
import { testLogger } from "../middleware/test.middleware";
import { testController } from "../controllers/test.controller";

const router = Router();

router.post("/test", testLogger, testController);

export default router;
