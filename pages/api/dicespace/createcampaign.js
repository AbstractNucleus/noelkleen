import prisma from "../../../lib/prisma"



export default async function createCampaign(req, res){
    const create = await prisma.campaign.create({
        data: {
            creatorId: "kjh23klj4h23kj4h23l",
            name: req.body.name,
            description: req.body.description,
            adminIds: [],
            characterIds: []
        },
    })


    res.json({"s":"l"})

}

export async function createIns(req){
    
}