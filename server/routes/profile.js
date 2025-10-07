import express from "express"
import prisma from "../prisma/client.js"

const profileRouter = express.Router();

profileRouter.post("/", async (req, res) => {
    //1. access req and 
    const { name, title, about } = req.body;
    const createProfile = {
        data: {
            name: name,
            title: title,
            about: about
        } 
    }
    //2. sql statment
    const result = await prisma.profile.create(createProfile);
    //3. res section
    return res.status(201).json({
        "success": true,
        "message": "create new profile successfully"
    })

})

profileRouter.get("/", async (req, res) => {
    //1. access req and body
    //2. sql statment
    const result = await prisma.profile.findMany();
    //3. res section
    return res.status(200).json({
        "success": true,
        "message": "test get method on vercel",
        "data": result
    })

})

export default profileRouter;