import { Router } from "express";
import { router as proxyRoutes } from "../routes/proxy.routes";
import { join } from "path";

const router = Router();

router.use("/proxy", proxyRoutes);

router.get("/", function (req, res) {
  res.sendFile("set-secret.html", {
    root: join(__dirname, "../views"),
  });
});

export default router;
