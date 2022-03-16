import Link from "next/link"


export default function CampaignOverview({campaigns}) {
    return (
        <>
            <div className="container shadow-lg w-2/3 lg:w-1/3 min-w-1/3 cursor-default">
                <div className="bg-[#272727] px-5 py-1 text-xl text-[#BEF264] rounded-t-lg">
                    <Link href="/dicespace/campaigns">Campaigns</Link>
                </div>
                <div className="bg-[#3a3a3a] px-5 rounded-b-md space-y-2">
                    {campaigns.map((campaign) => (
                        <Link href={"/dicespace/campaigns/"+campaign.id} key={campaign.id} passHref>
                            <div className="flex-col text-zinc-400 hover:bg-[#353535] py-1 space-y-1">
                                <p className="text-xl text-zinc-200">{campaign.name}<p className="text-base float-right">{campaign.creator.name}</p></p>
                                <h2 className="text-zinc-300">Characters</h2>
                                {campaign.characters.map((character) => (
                                    <p key={character.id}>{character.name} ({character.creatorId})</p>
                                ))}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}