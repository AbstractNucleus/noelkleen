import Navbar from "../../components/Dicespace/Navbar"
import { getSession, useSession } from "next-auth/react"
import CharacterOverview from "../../components/Dicespace/CharacterOverview"
import CampaignOverview from "../../components/Dicespace/CampaignOverview"
import prisma from "../../lib/prisma"

export default function Dicespace({ campaigns, characters }) {
    return (
        <>
            <Navbar />
            <div className="flex-col gap-4">
                <div className="lg:flex">
                    <CharacterOverview characters={characters} />
                    <h1 className="text-3xl"></h1>
                    <br />
                    <CampaignOverview campaigns={campaigns} />
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const session = await getSession(context)
    if (session) {
        const user = session.user

        // Get campaigns for overview
        var campaigns = await prisma.campaign.findMany({
            where: { creatorId: user.id },
        })

        // Get characters for overview
        const charactersOverview = await prisma.character.findMany({
            where: { creatorId: user.id },
        })

        // Add creator to characters
        for (let i = 0; i < charactersOverview.length; i++) {
            charactersOverview[i] = Object.assign(
                {
                    creator: await prisma.user.findUnique({
                        where: { id: charactersOverview[i].creatorId },
                    }),
                },
                charactersOverview[i]
            )
        }

        // Change date of campaigns and add characters by id to the campaign
        for (let i = 0; i < campaigns.length; i++) {
            // Add objects to campaign
            campaigns[i] = Object.assign({ characters: [] }, campaigns[i])
            campaigns[i] = Object.assign(
                {
                    creator: await prisma.user.findUnique({
                        where: { id: campaigns[i].creatorId },
                    }),
                },
                campaigns[i]
            )
            campaigns[i] = Object.assign({ admins: [] }, campaigns[i])

            // Change date
            campaigns[i].createdAt = campaigns[i].createdAt.toDateString()

            // Add characters
            const characterIds = campaigns[i].characterIds
            const characters = campaigns[i].characters
            const adminIds = campaigns[i].adminIds
            const admins = campaigns[i].admins

            for (let j = 0; j < characterIds.length; j++) {
                var characterInCampaign = await prisma.character.findUnique({
                    where: { id: characterIds[j] },
                })
                characters.push(characterInCampaign)
            }
            for (let j = 0; j < adminIds.length; j++) {
                var adminInCampaign = await prisma.user.findUnique({
                    where: { id: adminIds[j] },
                })
                admins.push(adminInCampaign)
            }
        }
        return {
            props: {
                session: await getSession(context),
                campaigns: campaigns,
                characters: charactersOverview,
            },
        }
    }
    return {
        props: {
            campaigns: null,
            session: null,
            characters: null,
        },
    }
}

Dicespace.auth = true
