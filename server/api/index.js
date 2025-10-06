import express from "express";
import profileRouter from "../routes/profile.js";

const app = express();

app.use(express.json());
app.use("/api", profileRouter);

export default app;