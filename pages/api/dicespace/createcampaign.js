import prisma from "../../../lib/prisma"
import { getSession } from 'next-auth/react';


export default async function createCampaign(req, res){
    const session = await getSession({ req })
    const create = await prisma.campaign.create({
        data: {
            creatorId: session.user.id,
            name: req.body.name,
            description: req.body.description,
            adminIds: [],
            characterIds: []
        },
    })
    res.redirect(301, "/dicespace/campaigns/"+create.id)
}
