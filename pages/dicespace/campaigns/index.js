import Navbar from "../../../components/Dicespace/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";



export default function Campaigns() {

    return (
        <>
            <Navbar />
            <form action="/api/dicespace/createcampaign" method="post">
                <div className="flex-col w-5/12 space-y-4">
                    <div>
                        <label htmlFor="name">Name of campaign</label><br />
                        <input className="w-1/2 h-8 p-5 bg-[#4d4d4d]" placeholder="name" name="name" id="name" type="text" required />
                    </div>
                    <div>
                        <label htmlFor="description">Campaign description</label><br />
                        <textarea className="w-full h-50 p-5 bg-[#4d4d4d]" placeholder="description" name="description" id="description" type="text" required />
                    </div>
                    <button className="bg-[#272727] text-[#22D3EE] w-full py-2" type="submit">
                        <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
            </form>
        </>
    );
}


Campaigns.auth = true
