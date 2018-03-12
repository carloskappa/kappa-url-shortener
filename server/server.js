import express from "express";
import morgan from "morgan";
import api from "./routes/api";
const app = express();
app.use(morgan("dev"));
app.use("/api", api);

app.listen(3000);
