import Link from "next/link"


export default function CampaignOverview({characters}) {
    return (
        <>
            <div className="container shadow-lg w-2/3 lg:w-1/3 min-w-1/3 cursor-default">
                <div className="bg-[#272727] px-5 py-1 text-xl text-[#BEF264] rounded-t-lg">
                    <Link href="/dicespace/campaigns">Characters</Link>
                </div>
                <div className="bg-[#3a3a3a] px-5 rounded-b-md space-y-2">
                    {characters.map((character) => (
                        <Link href={"/dicespace/characters/"+character.id} key={character.id} passHref>
                            <div className="flex-col text-zinc-400 hover:bg-[#353535] py-1">
                                <div className="text-xl text-zinc-200">{character.name}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}