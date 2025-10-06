import express from "express";
import personalInfoRouter from "./routes/personal-info.js";
import profileRouter from "./routes/profile.js"


const app = express();
const PORT = 4000;

app.use(express.json());
app.use("/", personalInfoRouter);
app.use("/", profileRouter);

/*
app.get("/", async (req, res) => {
    //1. access body and req
    //2. sql statmen
    //3. res section
    return res.status(200).json({
        "success": true,
        "message": "test pass"
    })
})
*/


app.listen(PORT, () => {
    console.log("server is running at Port " + PORT);
});

export default app;