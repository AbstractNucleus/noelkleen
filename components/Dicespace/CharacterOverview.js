import Link from "next/link"

export default function CampaignOverview({ characters }) {
    return (
        <>
            <div className="min-w-1/3 container w-2/3 cursor-default shadow-lg lg:w-1/3">
                <div className="rounded-t-lg bg-[#272727] px-5 py-1 text-xl text-[#BEF264]">
                    <Link href="/dicespace/campaigns">Characters</Link>
                </div>
                <div className="space-y-2 rounded-b-md bg-[#3a3a3a] px-5">
                    {characters.map((character) => (
                        <Link
                            href={"/dicespace/characters/" + character.id}
                            key={character.id}
                            passHref
                        >
                            <div className="flex-col py-1 text-zinc-400 hover:bg-[#353535]">
                                <div className="text-xl text-zinc-200">
                                    {character.name}
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}
