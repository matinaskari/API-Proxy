import express, { Application } from "express";
import { PORT } from "./config";
import morgan from "morgan";
import api from "./routes/api";

const app: Application = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded());

app.use("/api", api);

app.listen(PORT, "127.0.0.1", () =>
  console.log(`[i] server is running on :${PORT} ...`)
);
