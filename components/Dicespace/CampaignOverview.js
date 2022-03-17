import Link from "next/link"

export default function CampaignOverview({ campaigns }) {
    return (
        <>
            <div className="min-w-1/3 container w-2/3 cursor-default shadow-lg lg:w-1/3">
                <div className="rounded-t-lg bg-[#272727] px-5 py-1 text-xl text-[#BEF264]">
                    <Link href="/dicespace/campaigns">Campaigns</Link>
                </div>
                <div className="space-y-2 rounded-b-md bg-[#3a3a3a] px-5">
                    {campaigns.map((campaign) => (
                        <Link
                            href={"/dicespace/campaigns/" + campaign.id}
                            key={campaign.id}
                            passHref
                        >
                            <div className="flex-col space-y-1 py-1 text-zinc-400 hover:bg-[#353535]">
                                <p className="text-xl text-zinc-200">
                                    {campaign.name}
                                    <p className="float-right text-base">
                                        {campaign.creator.name}
                                    </p>
                                </p>
                                <h2 className="text-zinc-300">Characters</h2>
                                {campaign.characters.map((character) => (
                                    <p key={character.id}>
                                        {character.name} ({character.creatorId})
                                    </p>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
