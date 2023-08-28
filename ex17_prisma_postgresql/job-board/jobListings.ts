import {Router} from "express"
import {PrismaClient} from "@prisma/client"


const prisma = new PrismaClient
const router = Router()

router.get("/", async(req, res) => {
    return res.json(await prisma.joblisting.findMany())


})

router.post("/", async (req, res) => {
    const jobs = await prisma.joblisting.create(
        {
            data: req.body
        })
    res.json(jobs);
})

export default router