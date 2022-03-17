import { PrismaClient } from "@prisma/client";
import { useRouter } from "next/router";

const prisma = new PrismaClient()


export default function createCampaign(req, res){
    
    createIns(req)
    res.json({"s":"l"})

}

export async function createIns(req){
    const create = await prisma.campaign.create({
        data: {
            creatorId: "kjh23klj4h23kj4h23l",
            name: req.body.name,
            description: req.body.description,
            adminIds: [],
            characterIds: []
        },
    })
    console.log(create)
}