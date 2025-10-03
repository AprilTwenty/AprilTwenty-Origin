import router from "express";

const personalInfoRouter = router();

personalInfoRouter.get("/", async (req, res) => {
    //1. access body and req
    //2. sql statment
    //3. res section
    return res.status(200).json({
        "success": true,
        "massgae": "pernonal info"
    });
})

export default personalInfoRouter;