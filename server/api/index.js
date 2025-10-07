import express from "express";
import profileRouter from "../routes/profile.js";

const app = express();
app.use(express.json());
app.use("/api", profileRouter);

app.get("/", (req, res) => {
  res.json({ success: true, message: "test pass" });
});

export default app;