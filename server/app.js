import express from "express";

const app = express();
const PORT = 4000;

app.use(express.json());
app.get("/", async (req, res) => {
    //1. access body and req
    //2. sql statmen
    //3. res section
    return res.status(200).json({
        "success": "true",
        "message": "test pass"
    })
})
app.listen(PORT, () => {
    console.log("server is running at Port " + PORT);
});

export default app;