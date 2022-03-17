import Navbar from "../../../components/Dicespace/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useSession } from "next-auth/react"
import { useRouter } from "next/router";
import createCampaign from "../../api/dicespace/createCampaign";




export default function Campaigns() {
    const router = useRouter()
    const { data: session, status } = useSession()

    return (
        <>
            <Navbar />
            <form action="/api/dicespace/createcampaign" method="post">
            <input placeholder="name" name="name" id="name" type="text" required />
            <input placeholder="description" name="description" id="description" type="text" required />
            <input className="hidden" name="session" id="session" value={session.user.id} />
            <div className="float-right h-10 w-10 bg-[#272727] text-[#22D3EE]">
                <button className="left-0 right-0 top-0 bottom-0 h-full w-full" type="submit">
                    <FontAwesomeIcon icon={faPlus} className="h-full w-full" />
                </button>
            </div>
            </form>
        </>
    );
}


Campaigns.auth = true