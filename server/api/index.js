import express from "express";
import profileRouter from "../routes/profile.js";

const app = express();

app.use(express.json());
app.use("/api", profileRouter);

app.get("/", async (req, res) => {
    //1. access body and req
    //2. sql statmen
    //3. res section
    return res.status(200).json({
        "success": true,
        "message": "test pass"
    })
})

export default app;